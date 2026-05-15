---
title: Homework 3
tags:
- Transfer Learning
- Heterogeneous Graph
nav_visibility: normal
created: '2025-04-01'
last_modified: '2025-05-13'
lang: zh
category: solution:homework
---

|      |                      |     |
| ---- | -------------------- | --- |
| 姓名   |                      |     |
| 學號   |                      |     |
| 電子郵件 |                      |     |

## Introduction (STRATEGIES FOR PRE-TRAINING GRAPH NEURAL NETWORKS)

### Paragraph 1: Research Field Overview

- S1: Research field overview on *Transfer Learning (Pretraining)*
- S2: The success of transfer learning in other fields
- S3: The significance: few studies have generalized pre-training to graph data.

### Paragraph 2: Research challenge/limitation/opportunity

- S1: Pretraining has the potential. However, there are <span style="color: #EF5040">two fundamental challenges</span> 
- S2: Illustrate the first challenge
- S3-4: The second challenge


### Paragraph 3: More details on challenges

- S1: Pretraining remains a hard challenge on graph
- S2-4: How this is different (compared to pretraining in other fields)

### Paragraph 4: Contributions

- S1: specify the scope of the focus
- S2-end: Present contributions
    - C1: First in the field. Release pretraining dataset. Highlight a current issue.
    - C2: The framework, and its validity

## Paragraph 5: Important Observations

- S1-4: Illustrate their valuable observations
- S4: Use their experimental results to strength the statement

## Paragraph 6: Method Overview

- S1: State the method scope again
- S2: Explain the method in high-level
- S3: Explain why it work (intuitively), with illustrative figures.
- S4: Explain the <span style="color: #EF5040">differences</span> from existing method in high-level (with illustrative figures)


## Paragraph 7: Results Overview

- S1: Briefly explain the setup, and state the significance of their results
- S2: Restate their results with evidences (numbers)
- S3: Introduce other benefits



---

## V2

### NOTE

- Use "metapath" instead of "meta-path"

### Logic flow

- **Overview of Heterogeneous Graph Modeling**  
    Heterogeneous Information Networks (HINs) model complex systems involving multiple types of nodes, relations, and features across different domains.
- **Limitations in Current Literature**  
    Existing works often rely on benchmark HINs with fixed schemas, overlooking that different HIN schemas can be constructed from the same underlying data.  
    → **Significance**: Since Heterogeneous Graph Neural Networks (HGNNs) explicitly encode graph schema—including relation types and node heterogeneity—the choice of schema directly impacts model performance.
- **Schema Mutation Techniques**  
    Various techniques have been developed to mutate or enrich HIN schemas:
    1. **Metapath-based relations**: Add high-order relations using predefined metapaths (e.g., \cite{HAN}).
    2. **Metapath-aggregated features**: Generate node features by aggregating information along specific metapaths (e.g., \cite{SimpleHGN, SeHGNN}).
    3. **Attribute-to-entity transformation**: Convert node attributes into new node and edge types, creating additional entities and relations (e.g., \cite{SimpleHGN}; see Fig. 1).
- **Current Practice in Benchmarks**  
    Benchmark HINs are typically constructed manually using a subset of the above techniques, without optimizing for task-specific performance.
- **Challenge: Exponential Explosion**  
    Choosing the optimal HIN schema is non-trivial due to the vast number of possible metapaths and attribute combinations.
- **Research Gap**  
    Despite its importance, the construction of effective HIN schemas is underexplored. A few works (e.g., \cite{RDL}) propose systematic schema generation from relational databases. However, the same data can be represented through different database designs (e.g., normalization variants), meaning the challenge remains unresolved.
- **Insight: Expressiveness of HGNNs**  
    Recent work (\cite{PSHGCN}) shows that many HGNNs can be interpreted as approximating spectral heterogeneous graph convolution using non-commutative polynomials.
    → **Implication**:
    - Adding **metapath-based relations** or **metapath-aggregated features** does _not_ increase theoretical expressiveness when the model has sufficient depth.
    - In contrast, **attribute-to-entity transformation** enhances expressiveness. This is because relations serve as the basis for the polynomial formulation, while raw attributes cannot be directly modeled unless transformed into relational structures.
- **Canonical Form of HIN**
    To fully exploit the expressive potential of HGNNs, we propose transforming _all node attributes into entities_, resulting in an **attribute-less heterogeneous graph**.  
    This fully relationalized representation is referred to as the **canonical form** of the HIN.
- **Challenges of Canonical HINs**
    1. **Schema Complexity**: The canonical graph introduces a more complex schema, increasing HGNN complexity.
    2. **Embedding Scalability**: In canonical HINs, all nodes are featureless. Assigning and learning embeddings for every node—especially in large-scale graphs—is impractical.
- **Proposed Framework**  
    We propose a framework that performs **binary selection over node types and edge types** in the canonical schema to determine a task-specific HIN schema.
    - Selected **node types** are assigned learnable embeddings.
    - Selected **edge types** define the retained relations in the final graph.  

- **Results Overview**
- Our experiments demonstrate that the proposed schema search consistently improves performance across multiple HGNNs.
- Even simple models like sRGCN achieve up to **X%** improvement on \<dataset\>, highlighting the impact of better HIN construction.
- On large-scale datasets, our method enhances precomputation-based models, confirming that it generalizes well to a variety of HGNN architectures rooted in spectral heterogeneous graph convolution.

- **Contribution**
- We propose a framework to **systematically construct expressive HIN schemas** tailored to downstream tasks—an often overlooked but critical factor for effective graph modeling.
- We share the **searched HIN schemas** for common benchmarks to **support consistent evaluation and model development** in future studies.
- Our experiments show that even **simple models** like sRGCN, when paired with our optimized schema, can achieve **state-of-the-art performance** on multiple datasets—highlighting the impact of schema design.


---

# Introduction (From Relational Data to Heterogeneous Graphs: A Principled Construction Framework)

## P1: overview
Heterogeneous graph modeling offers a powerful paradigm for representing complex systems involving multiple types of entities and relations. Such graphs, characterized by typed nodes and edges, are widely used across a range of applications, including recommendation systems, protein interaction networks, and scholarly data analysis. While deep learning on heterogeneous graphs has seen rapid advancements and growing adoption, relatively little attention has been paid to bridging these techniques with relational deep learning.

## P2-3: Challenges/Opportunity

Relational data, such as those stored in structured databases, hold significant potential for enabling rich, semantically grounded learning. However, leveraging this potential remains challenging. First, traditional relation learning paradigms often assume a single, flat table as input, which does not naturally accommodate the multi-table, interlinked structure of real-world relational databases. To bridge this mismatch, practitioners commonly resort to extensive manual feature engineering—joining and aggregating multiple tables into a single, regular format using domain knowledge and intuition (cite RDL). This process is not only time-consuming and labor-intensive, but also frequently sub-optimal.

<span style="color: #EF5040">(Research GAP? Most relevant related works?)</span>
<span style="color: #EF5040">(Try to include more related work, even they are not very relevant)</span>
<span style="color: #EF5040">Fear</span>

Heterogeneous Graph Neural Networks (HGNNs) have emerged as a promising alternative, enabling more principled modeling of data with complex schemas. Yet, challenges remain. Constructing a meaningful heterogeneous graph from raw relational data is itself a non-trivial task. Even when systematic construction methods are adopted (cite RDL), the resulting graph can introduce structural issues—such as elongated paths between entities—that hinder the effectiveness of message-passing mechanisms central to HGNNs. Moreover, many commonly used graph benchmarks rely on human-designed graphs, and we observe that different construction strategies can significantly affect model performance. Recent work has also proposed precomputation-based HGNN variants that aggregate features in advance and recast the task into a tabular form, offering efficiency and scalability. While effective, these methods implicitly revert back to the limitations of traditional (<span style="color: #EF5040">one table</span>) manual aggregation, raising questions about how best to integrate structure with learning.

## P4: Contributions
<span style="color: #EF5040">(Move backward)</span>

In this work, we focus on developing a systematic <span style="color: #EF5040">(automatic)</span> framework for constructing heterogeneous graphs from raw relational data. Our study makes four key contributions. (1) We present the first large-scale investigation into graph construction strategies tailored for heterogeneous graph neural networks, addressing a long-standing gap between relational data modeling and graph-based learning.
(3) Through our analysis, we highlight a fundamental but often overlooked insight: node features and graph structure—i.e., entities and their relations—are inherently interchangeable, yet are treated asymmetrically in most HGNN models.


(2) To support further research in this area, we share the constructed graphs for several widely used relational datasets, facilitating benchmarking<del> and reproducibility</del> in heterogeneous graph representation learning. (<span style="color: #EF5040">Too vague</span>)
<span style="color: #EF5040">We propose ...</span>
(4) Finally, we show that when graphs are properly constructed from raw data, even simple models such as RCGN(cite) can achieve state-of-the-art performance, underscoring the critical impact of graph construction quality.

## P5: Key Observations (<span style="color: #EF5040">Add study overview</span>)

We observe that some common graph processing practices, such as constructing meta-path-based relations or pre-propagating node features, may not always be necessary when working with relational data. In many cases, these steps can be replaced with a more direct and structured approach to graph construction without sacrificing performance.

## P6: Method Overview
To this end, we propose a systematic framework for constructing heterogeneous graphs from raw relational data, serving as a preprocessing step before model training. A key insight is that node features and graph structure—i.e., entities and their relations—are interchangeable in many cases, though typically treated asymmetrically. Our framework introduces a binary decision process: for each node type, deciding whether to represent it with learned embeddings; and for each edge type, deciding whether to retain or omit it in the constructed graph. This process transforms a full-resolution root graph into a more compact, task-optimized heterogeneous graph. Unlike prior approaches that rely on heuristics or domain expertise, our framework enables a structured search over graph design choices, revealing the often overlooked impact of graph construction on downstream performance.

## P7: Results Overview

We evaluate our graph construction framework on node-level classification tasks across various domains, using sRGCN—a simple and widely used baseline model—as the primary backbone. Preliminary observations suggest that our method leads to consistent improvements across benchmarks, underscoring the value of principled graph construction from relational data. Compared to heuristic-based graph construction methods, our approach yields up to **X%** improvement in Macro-F1 and **Y%** in Accuracy. Notably, even a basic model like sRGCN benefits significantly, suggesting that well-structured graphs can reduce the need for complex model design. In addition, the constructed graph variants from our framework may provide new insights into the underlying structure of relational datasets and help guide future data-driven modeling strategies.

