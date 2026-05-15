---
title: Midterm 2 Solutions
tags:
- Machine Learning
- Convex Optimization
nav_visibility: normal
created: '2024-04-11'
last_modified: '2024-04-11'
lang: en
category: solution:exam
---

### (a)

$$
\begin{gather}
\text{maximize } & c^T x
\\
\text{subject to } & x_1^2 + x_2^2 +\dots + x_n^2 \le 1
\end{gather}
$$

where $c \in \mathbf R^n$

- Convex Optimization Problem: T
- LP: F
- QP: F
- QCQP: T
- SOCP: T
- Quasi-convex optimization problem: T

### (b)

$$
\begin{gather}
\text{maximize } & 3 x_1 + 2x_2 + x_3
\\
\text{subject to } & \sqrt {x_1 ^2 + 4x_2^2 + 9x_3^2} \le 2x_1 + x_2
\end{gather}
$$

where $c \in \mathbf R^n$

- Convex Optimization Problem: T
- LP: F
- QP: F
- QCQP: F
- SOCP: T
- Quasi-convex optimization problem: T

### (c)

$$
\begin{gather}
\text{maximize } & (x_1^3 + x_2^3 + x_3^3)^{1/3}
\\
\text{subject to } & x_1 - x_2 = 1
\\
& x_1 - x_2 + x_3 \le 0
\end{gather}
$$

where $c \in \mathbf R^n$

- Convex Optimization Problem: T
- LP: F
- QP: F
- QCQP: F
- SOCP: F
- Quasi-convex optimization problem: T

### (d)

$$
\begin{gather}
\text{maximize } & x_1^2 + x_2^2 + x_3^2
\\
\text{subject to } & -3 x_1 - 4x_2 - 5x_3 \le 1
\end{gather}
$$

where $c \in \mathbf R^n$

- Convex Optimization Problem: T
- LP: F
- QP: T
- QCQP: T
- SOCP: T
- Quasi-convex optimization problem: T

---

## 2.

Prove of disprove if it is convex.

### (a)

$C_1 = \set {a \in \mathbf R^k \mid p(0) = 1, | p(t)| \le 1 \text{ for } -3 \le t \le 5}$

where $p(t) = a_1 + a_2 t + \dots + a_k t^{k-1}$

### (b)

$C_2' = C_1 - 2C_2$ where $C_1 \subseteq \mathbf R^k$ and $C_2 \subseteq \mathbf R^k$ are both convex sets

### (c)

$C_3 = \set {x \in \mathbf R^k \mid \Vert x \Vert_{1/2} \le 1}$

### (d)

$C_4 = \set {x \in \mathbf R_{++}^k \mid \prod_{i=1}^k x_i \le 1}$

### (e)

$C_5 = \set {X \in \mathbf S^n \mid z ^T X z \ge 1, \forall z \in \mathbf R^n, \Vert z \Vert _2 = 1}$


---

T or F

(a) If $C \subseteq \mathbf R^n$ is an affine set. Then $0 \in C$


---

## 4.

convex, quasi-convex, or concave?

### (a)

$f_1: \mathbf R^3 \to \mathbf R, f_1(x) = x^T P x + q^T x + r$

where $P \in \mathbf S_{++}^3$

### (b)

$f_2: \mathbf R \to \mathbf R$, $f_2(x) = \log x$ with $\text{dom } f_2 = \mathbf R_{++}$


### (c)

$f_3: \mathbf S_{++}^3 \to \mathbf R$, $f_3(x) = \log \det (I + X)$


### (d)

$f_4: \mathbf R^2 \to \mathbf R$, $f_4(x) = \frac{a^T x + b}{c^T x + d}$

where $a = [6, 5]^T, b=4, c=[3, 2]^T$, and $d=1$

with $\text{dom } f_4 = \set{x \in \mathbf R^2 \mid c^T x + d > 0}$


