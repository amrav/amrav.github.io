---
layout: post
title: An analysis of PD team pairing algorithms
---

This is a short analysis of a few in-bracket pairing algorithms used in Parliamentary Debates (PDs). I've made assumptions liberally to simplify the process. Some familiarity with basic statistics and PDs is required.

Let the set of teams be \\(T\\). We assume these teams have a "true" or "mean" skill represented by skill vector \\(S\\), where each team \\(T_i\\) is assigned a skill \\(S_i\\) sampled from \\(\mathcal{N}(0,1)\\). A team's performance is modeled as a random variable \\(P_i \sim \mathcal{N}(S_i,0.3)\\). \\(T_i\\) beats \\(T_j\\) if \\(P_i > P_j\\), and the margin of victory is \\(P_i - P_j\\).

The total order \\(\leq_T\\) over \\(T\\) is defined by ordering by win-loss, then cumulative performance (sum of performance over all rounds). We also define the total order \\(\leq_T^*\\) over \\(T\\) by ordering teams by their cumulative performance so far in the tournament.

We simulate rounds as follows. In each round, first partition the teams by win-loss, then sort each partition by cumulative performance. Each partition is called a bracket. If there are any brackets with an odd number of teams, pull-up/pull-down teams from the adjacent brackets until all brackets have an even number of teams. Next, we pair teams within a bracket, using a pairing algorithm (such as \\(\operatorname{FOLD}\\) or \\(\operatorname{MID-SLIDE}\\)). We then simulate a debate by sampling each team's performance, decide the result as described above, and update the win-loss and cumulative scores tables for each team. These tables are used to generate the brackets and pairing for the next round.

This analysis focuses on how different bracketing algorithms (and the choice of whether to pull-up or pull-down) affects the order (under \\(\leq_T\\)) of teams as rounds proceed in a single tournament. Over infinite rounds in an ideal tournament, we would expect the ordering of teams under \\(\leq_T\\) to converge to the ordering under \\(\leq_T^*\\), since teams with better cumulative performances should, on average, beat teams with worse cumulative performances. I think that a high correlation between a team's cumulative performance ranking and its tournament ranking is desirable.

We use [Spearman's \\(\rho\\)](https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient) as a measure of the similarity between two orderings. If the rank of team \\(T_i\\) in the order \\(\leq_T\\) is \\(r_i\\) and in \\(\leq_T^*\\) is \\(s_i\\), and \\(n = \lvert T\rvert\\), then the Spearman coefficient is:

\\[\rho = 1 - \frac{6\sum(r_i - s_i)^2}{n(n^2 - 1)}\\]

This is a measure of how correlated the two rankings are. \\(\rho = 1\\) means that the rankings are exactly the same, and \\(\rho = 0\\) means that there's no correlation between the rankings. There are other rank correlation coefficients (I tried [Kendall's \\(\tau\\)](https://en.wikipedia.org/wiki/Kendall_rank_correlation_coefficient) and [Pearson's \\(r\\)](https://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient)), but they exhibit similar trends.

I plotted rank distance vs number of rounds by simulating tournaments for a variety of bracketing algorithms. Since any one particular tournament will have peculiarities linked to the sampling of teams and their performances, I ran each algorithm's simulation over 500 tournaments and took the mean values. Here's a graph of the correlation between the rankings by purely cumulative scores, and the tournament rankings, when using MOVs for tiebreaks.

![image](/assets/svg/spearman_7_mov.svg){: .svg-full}

Only pull-up is plotted, since pull-down very similar in all cases. \\(\operatorname{RANDOM-BRACKET}\\) pairs teams randomly within the same bracket. We also plot \\(\operatorname{RANDOM}\\) pairing, which pairs teams randomly irrespective of brackets, as a benchmark.

Here's another graph, this time using cumulative scores for tiebreaks.

![image](/assets/svg/spearman_7_speaks.svg){: .svg-full}

So what does this mean for tournament policy? It's probably too early to draw any firm conclusions, but \\(\operatorname{POWER-BRACKET}\\) seems to be poorly correlated compared to other methods of pairing. \\(\operatorname{FOLD}\\) and \\(\operatorname{MID-SLIDE}\\) might be less different than we think (although the difference between them increases when we increase the standard deviation of a team's performance from its mean).

If you have any suggestions on how to improve this analysis, do let me know.

<script type="text/javascript"
src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
