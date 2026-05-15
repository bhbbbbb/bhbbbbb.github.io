---
title: 'User Behavior Analysis: From Individuals to Networks'
nav_visibility: normal
created: '2024-04-16'
last_modified: '2024-04-16'
lang: zh
category: other:lecture
---

# User Behavior Analysis: From Individuals to Networks


## Review
The professor first talked about the class imbalanced problem, and how the class-imbalanced data influence DL models.
Some common approach to solving this issue including oversampling techniques such as SMOTE, ADASYN. Another category of the solution is called reweighting, which does not introduce synthetic data.

To be more specifically, the topic today focuses on the class imbalanced problem for graph. The challenge for oversampling on graph is that we can not simply have interpolation between existing samples like what has been done by SMOTE. Even though we could adapt SMOTE and generate new nodes, we have no idea how to connect the generated nodes back into the networks.

In response to the problem, they proposed FincGAN.
The idea of FincGAN is they first generates nodes based on the embedding of nodes from the original graphs. Then the edge generators takes the generated nodes and generates edges so that the new nodes can be connected back to the original networks.


The experimental results of FincGAN show strong improvement in Amazon datasets, but not state-of-the-art in Yelp dataset.
Therefore, they also proposed another technique for over-sampling called FlashGAN. The key difference from FincGAN is that they managed to generate nodes and edges to the original graph simultaneously.

## perspective and comments

Today the professor gives an expert talk about two works FincGAN, FlashGAN tackling the challenge in class-imbalanced problem on graphs.

The framework of over-sampling is actually a generative process.

In the case of over-sampling, the focus is generating nodes for minor class. But the framework can be adapted to generate nodes in all classes, and thus it can serve as a graph generating/synthesizing method.
