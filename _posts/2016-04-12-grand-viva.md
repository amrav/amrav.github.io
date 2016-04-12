---
layout: post
title: Grand Viva
---
My grand viva today made me angry and confused enough to want to write about it. I’ll try to present the events as they happened, without embellishment or omission. Dialogue is reconstructed from memory, and preserves the essence of the original. Sentences in italics are my own observations and thoughts, and embellished with great pride. One more point of interest is that at the time of writing, I haven’t looked up the answers to the questions they asked, so I don’t know which of my answers were actually wrong.

----------

*9:20 am: I wake up with a jolt. Fuck, my viva was to start at 9; I needed to be there by 8:45. Fuck, fuck, fuck. I wash my face and rush to the CS department, trying to think of an excuse, but the best I could come up with was that a relative died. Not nearly good enough. Blurry eyed, I’m barely able to remember anything I’ve learned over the last five years. I mentally go through the list of subjects I’m going to tell the professors I’m good at: Algorithms, Operating Systems, Networks, Software Engineering. Should I say Distributed Systems? I love the subject, but I’ve learned by now not to be naïve enough to drag that into the unholy ritual of getting marks. I run up the stairs and, all too soon, I’m standing in front of a room full of professors. I tell myself that it’s okay; that these aren’t the worst profs in the CS department by far, and that one of them I actually like.*

**Profs**: What’s your name?\\
**Me:** Vikrant, sir.

*They shuffle through some sheets, probably realising that I’m late, but don’t say anything.*

**Profs:** Okay, tell us two core and two elective subjects that you’ve prepared.\\
**Me:** Algorithms, Networks, Operating Systems, Software Engineering.

*I’m relieved. If I’ve remembered this much, I’m probably not that screwed.
The professors exchange glances.*

**Profs:** Two core, two electives please.\\
**Me:** …sir, software engineering?

*It suddenly dawns on me that things aren’t going as expected. If the fool student doesn’t even know which subjects are electives, the professors think, how could he be expected to do Science?*

**Profs:** Okay, forget about electives. Let’s start with Networks. If you have a bitstream, how will you detect the beginning of a new MAC frame?\\
**Me:** …

*I suppose there’s some special reserved sequence of bytes that signals the beginning of a MAC frame. I don’t want to hazard a guess at this point.*

**Profs:** Fine. Do you know anything about encodings, like NRZ-I, or 4B/5B?\\
**Me:** …

*I have no idea what they’re talking about. I’m not even sure I remember the names they said properly; this is the closest I got by googling some vague recollection of sounds.*

**Profs:** Okay, what do you know about Networks?

*Hmm, I got an Ex in Networks Lab; I must know* something *about Networks. I’ve heard of something called…*

**Me:** Sir, TCP/IP.\\
**Profs:** Okay, tell us what happens when a TCP connection is set up.

*I draw a figure similar to the one below. It seems incomplete, but I have to soldier on.*

<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_59C04BE9F892FFC45325DD90253F327759685AFE939A338235B202C2FD6EAF4E_1460444317363_syn-ack.png" />


**Me:** The sender initiates a connection to the receiver…\\
**Profs:**  *(interrupting)* What’s in the SYN and ACK packets?\\
**Me:** (after a bit of prompting) I think the SYN has the sequence number and the port number of the sender. The ACK has the receive window of the receiver, which is based on its buffer size.\\
**Profs:** Is that it? How does the sender know which port to connect to?

*Finally! A question I know the answer to!*

**Me:** Through pre-established convention.

*The profs look startled, then begin to shake their heads. It seems that my moment of glory is not to be.*

**Profs:** What do you mean by “pre-established convention”?\\
**Me:** The application is responsible for knowing which port to connect to, and hands that information down to the TCP layer.\\
**Profs:** How does the application know which port to connect to?\\
**Me:** The application writers are supposed to know that – hence pre-established convention. For example, a web server will usually run on port 80, and a web browser knows that, and will connect to port 80.

*The profs stare at me and my silly diagram for a while. They don’t seem convinced. Perhaps I’m misunderstanding their question?*

**Profs:** Okay, what happens after the SYN and ACK packets? Does the sender begin transmitting data?\\
**Me:** Yes, the sender begins transmitting data.\\
**Profs:** You don’t know anything about TCP. Let’s move on to a different topic.

*I’m glad they see the situation so clearly. I begin to warm up to these profs.*

**Profs:** Let’s move to algorithms. Define a heap.

*Yes! I definitely know this one.*

**Me:** A heap is an abstract data type that allows you to efficiently get the minimum or maximum element from a collection of elements. It supports two operations, push and pop…

*As soon as I say this, I realise I’m being too general. I’m talking about a priority queue. A heap is more exactly specified, and I can’t remember precisely how. Instead of defining it, I’m talking about how it’s used.*

**Profs:** *(interrupting)* Push and pop! In a heap! What rubbish.\\
**Me:** Well, sir, you can call the functions whatever you like, but essentially what they do is…\\
**Profs:** *(interrupting)* Tell us, how is a heap implemented.

*I suddenly remember that a heap is a tree.*

**Me:** Well, a heap is a tree that satisfies the heap property. You can implement one in any way that you can implement a tree, but an efficient way to implement a heap is using an array.

*Profs begin shaking their heads. At this point, I really begin losing confidence in the part of my brain responsible for conscious thought.*

**Profs:** What do you mean “efficiently”?\\
**Me:** An array can be used to represent a binary tree efficiently when the tree is nearly complete…

*The proper term is full or nearly full.*

**Me:** … by storing the root in the 0th element, its left child in the 1st element, right child in the 2nd element, and so on. This representation allows us to access an element by simple arithmetic instead of following pointers, and the array is also faster because of cache locality.\\
**Profs:** What do you mean by “and so on”? It’s time to stop this and get formal.\\
**Me:** Sorry sir, what I meant is…\\
**Profs:** *(interrupting)* Tell us, what is the heap property?

*I rack my brain, but no formal definition comes to mind readily. If asked this question by another software engineer, I would have answered “The heap property loosely orders elements in the tree, but less strictly than a binary search tree. This way, we can be O(n) instead of O(nlogn) when constructing the heap, but still get the smallest k elements in O(nlogk) time, which is pretty awesome if you think about it. I think it has something to do with not bothering about ordering between a node’s children, but only between a node and its child. If you need to implement your own heap, you should probably Google the exact properties. There are probably practical efficiency considerations not covered by the definition. You could also look at Python’s heapify, heappush, and heappop; it’s pretty well documented.” However, I’ve a feeling I’d get thrown out of the room if I said that, so I draw a heap on the board and wait for formal inspiration to strike.*

<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_59C04BE9F892FFC45325DD90253F327759685AFE939A338235B202C2FD6EAF4E_1460445957245_heap.png" />


*The part of the diagram in black is what I initially draw, and the part in purple is what I’m later asked to modify it to. After a few moments of staring at the initial diagram, inspiration strikes.*

**Me:** Sir, the heap property is that for any node in the tree, the node is ordered with respect to its children. So a min heap would have every node less than or equal to its children, and similarly for a max heap.

*Profs begin shaking their heads quite vigorously, including Prof I Like. Did I really get the heap property wrong? I’m quite certain this is it, but they seem severely distressed by it.*

**Profs:** No, your heap property definition is wrong. Replace the 8 with a 2. Is this a heap?

*I dutifully erase the 8 and write a 2, taking as long as I can. Could I have missed something? Surely with the smallest element at a leaf, this could not be a min heap?*

**Me:** Sir, this is not a min heap.\\
**Profs:** What have you studied? Have you just come to the viva without preparing anything?\\
**Me:** Sir, Algorithms, Software Engineering, Operating Sys…\\
**Profs:** *(interrupting)* What topic have you prepared in algorithms?\\
**Me:** Sir, you can ask me anything else in algorithms.

*By this point, I’m in a state of panic. My most fundamental assumptions about the universe are falling to pieces around me.*

**Profs:** There’s no point, we’ve wasted enough time on it. Let’s move on to Software Engineering.\\
**Me:** Okay sir.\\
**Profs:** What is the difference between a class diagram and an object diagram in UML?

*I hate UML. Nobody actually uses UML, except the OMG and other silly standards bodies. Maybe there’s a use case for it when building software for a space shuttle or controls for a nuclear reactor, but if I ever get into that line of business, I’ll have bigger things to worry about than UML.*

**Me:** A class is a specification of a type and an object is an instantiation of a type.\\
**Profs:** If you don’t know something, don’t open your mouth and talk nonsense.\\
**Me:** Yes sir. Sorry sir.\\
**Profs:** What is a metric to measure coverage.

*I frantically wonder what kind of coverage he’s talking about. I open my mouth to ask “Sir, coverage of what?”, but then think the better of it. He’s probably talking about test coverage or something like that. What’s a good metric? Percentages seem fine to me, like “90%”. Even fractions would do the job nicely. “Two fifths covered.” I get the feeling these answers would not go down well.*

**Me:** Sir, I don’t know.\\
**Profs:** Okay, then what do you know about software engineering?

*They have a point. What* do *I know about software engineering? Not that much, when I really think about it. Sure, I’ve written a bunch of classes, a handful of modules, even something you might call “software”. But software engineering to me is the business of constructing vast castles in your imagination, with grand arches and huge sweeping landscapes. And then building little villages, dotted with shops, teeming with life and activity. You build dams to harness rivers, and lay down networks of roads, bridges, and tunnels, so things can get from here to there. You put out fires, survive earthquakes, launch rockets, and in the blink of an eye, go from here to a galaxy thousands of light years away. Programming is really the art of writing mathematics in a way that can compute in the real world. And mathematics, in all its abstract beauty, is limitless. What do I know about software engineering? Too little.*

*I’m wrenched back to reality very quickly.*

**Profs:** Tell us, what is Extreme Programming.\\
**Me:** Sir, XP is a form of agile software development. It’s characterised by… um… pair programming, and…\\
**Profs:** *(interrupting)* What is pair programming?\\
**Me:** It’s when two programmers sit side by side, and one codes while the other looks on and helps.\\
**Profs:** What are the benefits of pair programming?

*My mind wanders to the TV show Silicon Valley, with its (not too inaccurate) depiction of bro-culture. That’s probably how people came up with terms like extreme programming. Bro, I got your back, let’s wank out some code. You be scrum master, I’ll be agile. Together, we’ll change the world, through progressively shorter iteration cycles. Let me write some tests for a better world first, then all we need to do is get the tests to pass. It’s easy.*

**Me:** It’s a process of continuous code review, instead of doing it all at the end. Also, by discussing the design with someone else, you ensure that less bugs get into the code.\\
**Profs:** What is the difference between code review and testing? Couldn’t you just test the code to make sure it works?\\
**Me:** You could, but testing only makes sure the code satisfies some functional criterion. Making sure the code quality is high, and that it’s written efficiently, is still something that needs to be manually reviewed.\\
**Profs:** What do you mean by code quality?\\
**Me:** Mainly it has to do with how easy it is for a human to understand your code.

*Everything else follows from this dictum. Reusing code, having a clean separation of concerns, being modular, naming variables well, writing good comments and documentation, using good abstractions to decompose the problem into smaller subparts, using indentation and whitespace - these are all effective crutches designed to help a brain that can only hold six or seven things in working memory at a time. In retrospect, I should have explained this. In the event, the profs are nonplussed.*

**Profs:** Okay, you don’t know this either. Let’s move on to OS. What have you studied?\\
**Me:** Concurrency, process scheduling, …\\
**Profs:** *(interrupting)* Ah, concurrency! Tell us, what is the difference between concurrency and parallelism?

*Now, this is one of my favourite topics. The best explanation I’ve seen is Rob Pike’s talk,* [Concurrency Is Not Parallelism](http://blog.golang.org/concurrency-is-not-parallelism)*. I take a deep breath; this is my chance to redeem myself.*

**Me:** Sir, concurrency is about the time-independence of events. In other words, two events are concurrent if they cannot be ordered with respect to each other. Parallelism is about the time-simultaneity of events. In other words, two events are parallel if they are happening at the same physical time. Concurrency is a prerequisite for parallelism, but concurrency need not imply parallelism.

*The profs look stunned. The exchange incredulous looks, then slowly, deeply, begin shaking their heads.*

**Profs:** Do you actually know anything about concurrency? Give us an example of something that is concurrent but not parallel.

*I physically deflate. Had I so fundamentally misunderstood even concurrency? I wonder whether parallelism really needed to imply concurrency, but there is no time. I begin drawing a Lamport space-time diagram to explain myself, but the profs are in no mood to entertain this.*

**Profs:** Tell us, if two processes are executing on two different processors, is that concurrency or parallelism?\\
**Me:** It’s both. It’s concurrent, since, in the general case, we don’t know the ordering between instructions executing on the two processors. It’s parallel because the two processes are executing at the same physical time.\\
**Profs:** Oh? So what about two processes executing on one processor?\\
**Me:** It’s concurrent, but not parallel. Only one instruction can execute at a time. However, the ordering between instructions of the two processes is not known.\\
**Profs:** So, you haven’t studied OS either. You’d better start studying. You’re probably going to be standing here in front of us again, soon. You can leave.


### Epilogue:

*I sat in my room, dazed. Everything had happened so fast. Had I really not answered a single question correctly? Surely they had played a cruel joke? I whipped out my phone and Googled things. TCP. Heap property. Pair programming. Concurrency vs parallelism. It didn’t seem like I’d gotten things that wrong. Heck, the heap property was even outright correct. I did forget the SYN-ACK and ACK parts of the TCP handshake, and it seemed like computer scientists disagreed on whether parallelism really implies concurrency. An abstract notion of parallelism could probably be defined without concurrency, so parallelism is not the same thing as concurrency.*

*I’d been an unmitigated disappointment to the university, and deserved to fail, but had I really been any more a disappointment than those who would pass? I didn’t think so. I had no claim to have learned the things I was supposed to, but I think that somewhere, between me and the professors in my grand viva panel, it was an inability to communicate that became the issue. I wished I could speak to them in their language, or they in mine. Oh, the things we could’ve learned from each other in five years.*

----------

If I do end up having a re-viva, I’ll be better prepared. This time, I’ll know which subjects are electives.
