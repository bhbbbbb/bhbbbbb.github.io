---
title: Midterm 2
tags:
- Duality
nav_visibility: normal
created: '2024-04-10'
last_modified: '2024-04-11'
lang: en
category: solution:exam
---

## 1

### (a)

$f: \mathbf R^2 \to \mathbf R, \text{dom }f = \mathbf R_{++}^2$, $f(x_1, x_2) = \frac{1}{x_1 + 1/x_2}$.

### (b)

$$
\begin{gather}
C \subseteq \mathbf R^n, f_C: \mathbf R^n \to \mathbf R
\\
f_C(x) = \sup_{y \in C} \Vert x - y \Vert_2
\\\\
g_C: \mathbf R^n \to \mathbf R
\\
g_C(x) = \inf_{y \in C} \Vert x - y \Vert_2
\end{gather}
$$

### (c)

$$
\begin{gather}
h: \mathbf R^n \to \mathbf R, f: \mathbf R^n \to \mathbf R, g: \mathbf R^n \to \mathbf R
\\
h(x) = \frac{f(x)^2}{g(x)}
\\
\text{dom }h = \text{dom }f \cap \text{dom }g
\\\\
f(x), g(x) > 0, \qquad  f(x), g(x) \text{ are convex}
\end{gather}
$$

---

## 2.

Suppose $C \subseteq \mathbf R^n$ is nonempty and not convex. Prove or disprove that $S = \set{y \in \mathbf R^n \mid y ^T x \le 1 \,\forall x \in C}$ is convex 

---

# 3.

Let $f(x) = \log x$ with $\text{dom }f = \mathbf R_{++}$. Find $f^*$, and $\text{dom }f^*$


---

## 4. 

Determine whether each of the following sets is a convex set.

### (a)

An ellipsoid, defined as $\set {x \mid (x- x_c)^T P^{-1} (x-x_c) \le 1}$ where $x_c \in \mathbf R^n$ and $P \in \mathbf S_{++}^n$

### (b)

$\set{a \in \mathbf R^k \mid p(0) = 1; |p(t)| \ge 1 \, \text{ for } \alpha \le t \le \beta}$

where

$p(t) = a_1 + a_2 t + \dots + a_k t^{k-1}$

### (c)

$\set{a \in \mathbf R^k \mid p(0) = 1; |p(t)| \le 1 \, \text{ for } t \le \alpha \text{ or } t \ge \beta}$

where

$p(t) = a_1 + a_2 t + \dots + a_k t^{k-1}$, and $\alpha < \beta$

### (d)

$\set{x \in \mathbf R^n \mid \Vert Ax + b\Vert_2 \le c^T x + d}$

---

## 5. 

Determine whether each of the following is 

1. a convex optimization problem
2. an LP
3. a QP
4. a QCQP
5. a SOCP
6. a quasi-convex optimization problem

(a)

$$
\begin{gather}
\text{minimize } & c^T x
\\
\text{subject to } & x^T P x \le 1
\\\\
\text{where } P \in \mathbf S_{++}^n
\end{gather}
$$

- Convex Optimization Problem: T
- LP: F
- QP: F
- QCQP: T
- SOCP: T
- Quasi-convex optimization problem: F

### (b)

$$
\begin{gather}
\text{minimize } & c^T x
\\
\text{subject to } & \sqrt{x_1^2 + 4x_2^2 + 9x_3^2} \le 2x_1 + x_2
\end{gather}
$$

- Convex Optimization Problem: T
- LP:F
- QP:F
- QCQP:F
- SOCP:T
- Quasi-convex optimization problem: F
### (c)

$$
\begin{gather}
\text{minimize } & (x_1^5 + x_2^5)^{1/5}
\\
\text{subject to } & x_1 + x_2 = 1
\\
& x_1 - x_2 \le 0
\end{gather}
$$

- Convex Optimization Problem: T
- LP:F
- QP:F
- QCQP:F
- SOCP:F
- Quasi-convex optimization problem: F

### (d)

$$
\begin{gather}
\text{minimize } & x_1^2 + 2x_2^2 + 3x_3^2
\\
\text{subject to } & -x_1 - x_2 -x_3 \le 1
\end{gather}
$$

- Convex Optimization Problem: T
- LP:F
- QP:T
- QCQP:T
- SOCP:T
- Quasi-convex optimization problem: F

### (e)

$$
\begin{gather}
\text{minimize } & (\prod_{k=1}^n x_k)^{1/n}
\\
\text{subject to } & c^T x \ge 1
\\\\
\text{where } c \in \mathbf R^n
\end{gather}
$$