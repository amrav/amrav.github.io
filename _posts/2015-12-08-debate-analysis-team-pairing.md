---
layout: post
title: An analysis of PD team pairing algorithms
---

This is a short analysis of a few in-bracket pairing algorithms used in PDs. I've assumptions liberally to simplify the process. Some familiarity with basic statistics and PDs is required.

Let the set of teams be \\(T\\). We assume these teams have a "true" or "mean" skill represented by skill vector \\(S\\), where each team \\(T_i\\) is assigned a skill \\(S_i\\) sampled from \\(\mathcal{N}(0,1)\\). A team's performance is modeled as a random variable \\(P_i \sim \mathcal{N}(S_i,0.5)\\). \\(T_i\\) beats \\(T_j\\) if \\(P_i > P_j\\), and the margin of victory is \\(P_i - P_j\\).

The total order \\(\leq_T\\) over \\(T\\) is defined by ordering by win-loss, then cumulative performance (sum of performance over all rounds). We also define the total order \\(\leq_T^*\\) over \\(T\\) by ordering teams by their mean skills.

We simulate rounds as follows. In each round, first partition the teams by win-loss, then sort each partition by cumulative performance. Each partition is called a bracket. If there are any brackets with an odd number of teams, pull-up/pull-down teams from the adjacent brackets until all brackets have an even number of teams. Next, we pair teams within a bracket, using a pairing algorithm (such as \\(\operatorname{FOLD}\\) or \\(\operatorname{MID-SLIDE}\\)). We then simulate a debate by sampling each team's performance, decide the result as described above, and update the win-loss and cumulative scores tables for each team. These tables are used to generate the brackets and pairing for the next round.

This analysis focuses on how different bracketing algorithms (and the choice of whether to pull-up or pull-down) affects the order (under \\(\leq_T\\)) of teams as rounds proceed in a single tournament. Over infinite rounds in an ideal tournament, we would expect the ordering of teams under \\(\leq_T\\) to converge to the ordering under \\(\leq_T^*\\), since teams with a larger mean skill will, on average, beat teams with a smaller mean skill. Whether or not it is desirable for a bracketing algorithm to actually converge as fast as possible is not clear to me right now.

We define a measure of the similarity between two orderings, called rank distance. Let the index of team \\(T_i\\) in the order \\(\leq_T\\) be \\(j\\), and let the team whose index in the order \\(\leq_T^*\\) is \\(j\\) be \\(T_k\\). Then the rank distance is:

\\[\sum_{i=1}^{\lvert T\rvert}\frac{\lvert S_i - S_k\rvert \lvert T\rvert}{\max S - \min S}\\]

This is a rough measure of how displaced the actual rankings are, compared to the mean skill rankings, while taking into account how similar a displaced team is to the team whose rank it is occupying. A rank distance of \\(2\\) roughly means that two adjacent but unequal teams are interchanged in the ranking. There are other rank distance algorithms (like Kendall's Tau), but this seems to work fine for studying trends.

I plotted rank distance vs number of rounds by simulating tournaments for a variety of bracketing algorithms. Since any one particular tournament will have peculiarities linked to the sampling of teams and their performances, I ran each algorithm's simulation over 200 tournaments and took the RMS values. Here's a pretty graph.

![image](/assets/svg/rank_dist_v_rounds_10.svg){: .img-full}

The lighter lines in each algorithm represent pull-down, and the darker lines are pull-up. It seems like pull-down is almost always a bad choice. \\(\operatorname{RANDOM-BRACKET}\\) pairs teams randomly within the same bracket. We also plot \\(\operatorname{RANDOM}\\) pairing, which just pairs teams randomly irrespective of brackets, as a benchmark.

Here's another graph, this time with more rounds.

![image](/assets/svg/rank_dist_v_rounds_50.svg){: .img-full}

Interestingly, \\(\operatorname{RANDOM}\\) converges faster than any other method over a large number of rounds. This is probably because teams get "stuck" within a few brackets, and then are unable to leave that local optimum, and thus unable to settle into the optimum ranking. Of course, a 50 round tournament is just fantasy. More important is the fact that \\(\operatorname{FOLD}\\) converges fastest in the first 5 rounds, followed by \\(\operatorname{MID-SLIDE}\\).

So what does this mean for tournament policy? I'm not sure yet, but some things that debaters have probably felt intuitively seem to be supported by this data -- strong teams are rewarded and likely to break in \\(\operatorname{FOLD}\\), while it is easier for teams to upset the rankings with strong one-off performances in \\(\operatorname{MID-SLIDE}\\). Which system you prefer is up for debate, but what impact it will have on your tournament is a little less so.

<script type="text/javascript"
src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
