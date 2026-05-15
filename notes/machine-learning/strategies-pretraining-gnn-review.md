---
title: Strategies for Pre-training GNNs Review
tags:
- Graph Neural Networks
- Transfer Learning
nav_visibility: normal
created: '2025-04-22'
last_modified: '2025-04-22'
lang: en
category: solution:homework
---

My best paper:

STRATEGIES FOR PRE-TRAINING GRAPH NEURAL NETWORKS

ICLR'2020 (Spotlight)

- Openreview available: https://openreview.net/forum?id=HJlWWJSFDH

## [Objective]

### 1. What are motivations for this work?

- Pretraining(Transfer learning) has shown strong success in domains like NLP, but remains under-explored in the graph domain.
- Pretraining for GNNs is non-trivial due to the complex and non-Euclidean structure of graph data.
- There is a need to develop pretraining strategies tailored for GNNs.

### 2. What is the proposed solution

- The paper introduces three pretraining tasks:
    - **Context Prediction (Node-level):** Predicts surrounding structure via minimizing embedding distance using an auxiliary GNN.
    - **Attribute Masking (Node-level):** Learns by reconstructing masked node features.
    - **Graph-level Property Prediction (Graph-level):** Uses supervised learning to predict graph-level properties from graph embeddings.
- Few existing works address node-level pretraining; almost none cover graph-level pretraining.
- The proposed approach shows notable improvements in graph-level tasks, with moderate gains on node-level tasks.

### 3. What is the work's evaluation of the proposed solution

- Experiments conducted on diverse datasets from chemistry and biology, with varying graph sizes and properties.
- Evaluated across multiple GNN architectures, including GCN and the state-of-the-art GIN.
- Section 5.3 presents key empirical insights that highlight the potential of GNN pretraining and motivate future research directions.

## [Subjective]

### 4.  My analysis of the identified problem, idea and evaluation?

- The study shows that pretraining (transfer learning) holds promise in the graph domain, particularly for enhancing GNN performance on downstream tasks.
- While the pretraining strategies are conceptually sound, they are largely empirical adaptations of ideas from NLP, and thus not highly novel in design.
- The evaluation is thorough, utilizing a range of datasets across varying graph scales and properties.
    - However, the focus on domains like chemistry and biology raises concerns about the generalizability of the approach to other graph types (e.g., social or citation networks).

### 5. My analysis of contributions

- The proposed methods are moderately novel—clearly inspired by NLP techniques, yet their application to graphs involves non-trivial adaptation due to the inherent structural differences.
- The empirical results are solid, especially for graph-level tasks, and the detailed observations contribute valuable insights that can guide future research in GNN pretraining.

### 6. What are further directions for  this research

An interesting direction would be extending the proposed methods to other domains, such as social or community graphs, where there is no graph-level task.

### 7. What questions are you left with?

- How do different GNN architectures affect the effectiveness of the proposed pretraining strategies?
    - Observation (1) notes that GIN yields the largest gains because it is theoretically the most expressive, but the paper does not analyze why other models perform differently or less effectively.
- The computational cost of pretraining, which is often significant in other domains, is not discussed. It would be valuable to understand the overhead involved and its trade-off with performance gains.

### 8. What is your take-away message from this paper

- Pretraining is a promising and effective strategy for improving GNN performance
- Pretraining strategies must be carefully chosen to avoid negative transfer


---

## Review

This paper proposes several strategies for pretraining Graph Neural Networks, inspired by transfer learning successes in NLP. It introduces two node-level tasks (context prediction and attribute masking) and one graph-level supervised task, aiming to improve downstream performance on graph-related tasks. The work is evaluated on multiple datasets from chemistry and biology using several GNN architectures, including GCN and GIN.

**Strengths:**
- \[S1\] The paper addresses an under-explored problem: how to effectively pretrain GNNs.
- \[S2\] Evaluation is thorough, using diverse datasets and multiple GNNs, and provides insightful observations.
- \[S3\] The paper is well-presented and clearly written, making the methodology and findings easy to follow.

**Weaknesses**:
- \[W1\] The proposed methods are conceptually adapted from NLP and offer limited novelty.
- \[W2\] The methods and tasks are tailored to specific domains (chemistry and biology), limiting generalizability to other graph types (e.g., social or citation networks).
- \[W3\] The effect of different GNN architectures on the effectiveness of pretraining is not analyzed in depth. (please refer to Q1)
- \[W4\] The paper does not discuss the computational cost (e.g., runtime or resource overhead) of the proposed pretraining strategies. (please refer to Q2)

**Questions**:

- \[Q1\] Could the authors provide further analysis on how and why different GNN architectures (beyond GIN) benefit differently from pretraining?
- \[Q2\] What is the runtime cost of pretraining?
