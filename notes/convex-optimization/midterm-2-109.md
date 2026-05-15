---
title: Midterm 2 (109)
tags:
- Convex Optimization
- Duality
- Robust Optimization
nav_visibility: normal
created: '2024-04-11'
last_modified: '2024-04-11'
lang: en
category: solution:exam
---

## 1.

For each of the following functions, prove or disprove if it is a convex function

### (a)

$f: \mathbf R^n \to \mathbf R$ with $f = -\prod_{i=1}^n x_i^{\alpha_i}$

$\text{dom }f = \mathbf R^{n}_{++}$ where $1^T \alpha = 1$

### (b)

$f: \mathbf R^n \to \mathbf R$ with $f(y) =\sup_{x \in C} a^T x$

where $a \in \mathbf R$ is a constant vector and $C = \set{ x \in \mathbf R^n \mid \Vert x \Vert_2 = 1}$

### (c)

$f: \mathbf R^n \to \mathbf R$ with $f(y) = \inf_{x \in D} \Vert y - x\Vert_p$

where $a \in \mathbf R^n$ is a constant vector and $D = \set{x \in \mathbf R^n \mid \Vert x \Vert_2 \le 1}$

### (d)

$f: \mathbf R^n \to \mathbf R$ with $f(x) = \frac{\Vert Ax - b \Vert_2^2}{1-x^T x}$

$\text{dom } f = \set {x \in \mathbf R^n \mid \Vert x \Vert \le 1}$

for any $A \in \mathbf R^{m \times n}$ and $b \in \mathbf R^m$


---

## 2.

$$
\begin{gather}
\text{minimize } & \Vert x \Vert_p
\\
\text{subject to } &  Ax = b
\end{gather}
$$

where $A \in \mathbf C^{m\times n}$, $b \in \mathbf C^m$, and the variable is $x \in \mathbf C^n$. Here $\Vert \cdot \Vert$ denotes the $l_p$ norm on $\mathbf C^n$, defined as

$$
\begin{gather}
\Vert x \Vert_p = \left(\sum\limits_{i=1}^n \vert x_i \vert^p\right)^{1/p}
\end{gather}
$$

for $p \ge 1$ and $\Vert x \Vert_{\infty} = \max _{i=1, \dots, n} |x_i|$.

We assume $A$ is full rank, and $m < n$

### (a)

Reformulate the complex least $l_2$-norm problem as a least $l_2$-norm problem with real problem data and variable.

Hint: Use $z = (\text{Re}(x), \text{Im}(x)) \in \mathbf R^{2n}$ as the variable.

### (b)

Reformulate the complex least $1_\infty$-norm problem as an SOCP

---

## 3.

Consider a LP

$$
\begin{gather}
\text{minimize } & c^T x
\\
\text{subject to } & Ax \preceq b
\end{gather}
$$

where $c \in \mathbf R^n$ is uncertain and lies in an ellipsoid

$$
\begin{gather}
\varepsilon = \set{\bar c + Pu \mid \Vert u \Vert \le 1}, \qquad P \in \mathbf R^{n \times n}
\end{gather}
$$
We intend to study the robust linear program and minimize the largest possible value of $c^T x$ among all $c \in \varepsilon$, that is,
$$
\begin{gather}
\text{minimize } & \sup_{c \in \varepsilon} c^T x
\\
\text{subject to } & A x \preceq b
\end{gather}
$$

### (a)

Determine if the problem is a convex problem. Why?

### (b)

Try to rewrite the problem as an equivalent problem in the form of either a QCQP or an SOCP. Explain why the new problem you write is a QCQP (or an SOCP).  IF you find that it is not possible, please also explain why it is so.

---

## 4

### (a)

$$
\begin{gather}
\text{minimize } & (c^T x)^2
\\
\text{subject to } & x^T P x \le 1
\end{gather}
$$

- Convex Optimization Problem: T
- LP: F
- QP: F
- QCQP: T
- SOCP: T
- Quasi-convex optimization problem: T

### (b)

$$
\begin{gather}
\text{minimize } & 2x_1 + 3x_2
\\
\text{subject to } & \sqrt{x_1^2 + 4x_2^2 + 9x_3^3} \ge 4 x_1 + 3x_2
\end{gather}
$$


- Convex Optimization Problem: F
- LP:
- QP:
- QCQP:
- SOCP:
- Quasi-convex optimization problem: F

### (c)

$$
\begin{gather}
\text{minimize } & x_1 ^2 + x_2^2
\\
\text{subject to } & x_1 + x_2 = 1
\\
& x_1 - x_2 \le 0
\end{gather}
$$

- Convex Optimization Problem:T
- LP:F
- QP:T
- QCQP:T
- SOCP:T
- Quasi-convex optimization problem: T


### (d)

$$
\begin{gather}
\text{minimize } & x_1^2 + 2x_2 ^4 + 3x_3^6
\\
\text{subject to } & x_1 + x_2 - x_3 \le 1
\\
\end{gather}
$$

- Convex Optimization Problem: T
- LP: F
- QP: F
- QCQP: F
- SOCP: F
- Quasi-convex optimization problem: T


### (e)

$$
\begin{gather}
\text{maximize } & \log(\sum\limits_{k=1}^n x_k)
\\
\text{subject to } & c^T x \ge 1
\\
\end{gather}
$$

where $c \in \mathbf R^n$

- Convex Optimization Problem: T
- LP: T
- QP: T
- QCQP: T
- SOCP: T
- Quasi-convex optimization problem: T