---
title: Duality
tags:
- Convex Optimization
- Duality
- Conjugate Functions
nav_visibility: normal
created: '2024-05-04'
last_modified: '2024-05-09'
lang: en
category: knowledge:textbook
---

## The Lagrangian

Consider an optimization problem, not necessarily convex, in the standard form:

$$
\begin{gather}
\text{minimize } & f_0(x)
\\
\text{subject to } & f_i(x) \le 0, & i=1, \dots, m
\\
& h_i(x) = 0, & i=1, \dots, p
\end{gather}
$$
with variable $x \in \mathbf R^n$, with a nonempty domain

$$
\begin{gather}
\mathcal D = \left(\bigcap_{i\in m} \text{dom }f_i\right) \cap \left(\bigcap_{i\in p} \text{dom }h_i\right)
\end{gather}
$$
and the optimal value being $p^*$.

The Lagrangian $L: \mathbf R^n \times \mathbf R^m \times \mathbf R^p \to \mathbf R$

$$
\begin{gather}
L(x, \lambda, \nu) = f_0(x) + \sum\limits_i^m \lambda_i f_i(x) + \sum\limits_i^p \nu_i h_i(x)
\end{gather}
$$
with $\text{dom } L = \mathcal D \times \mathbf R^m \times \mathbf R^p$

- $\lambda_i$ and $\nu_i$ are Lagrange multiplier
- The vectors $\lambda$ and $\nu$ are called *dual variables* or Lagrange multiplier vectors associated with the original problem

### The Lagrange Dual Function

Defined as the minimum value of the Lagrangian over $x: g: \mathbf R^m \times \mathbf R^p \to \mathbf R$ and for $\lambda \in \mathbf R^m, \nu \in \mathbf R^p$,

$$
\begin{gather}
g(\lambda, \nu) = \inf_{x\in \mathcal D} L(x, \lambda, \nu) = \inf_{x\in \mathcal D}{\left(f_0(x) + \lambda^T f(x) + \nu^T h(x)\right)}
\end{gather}
$$

- When the Lagrangian is unbounded below in $x$, the dual function takes on the value $-\infty$.
- The domain of the dual function is set to be $$\text{dom }g = \set{(\lambda, \nu) \mid g(\lambda, \nu) > -\infty}$$
- The dual function is <span style="color: #EF5040">always concave</span>
- For any $\lambda \succeq 0$ and any $\nu$, we have $$g(\lambda, \mu) \le p^*$$
- The dual function gives a nontrivial lower bound on $p^*$ only when $\lambda \succeq 0$ and $(\lambda, \nu) \text{dom }g$ (i.e. $g(\lambda, \nu) > -\infty$).
- We refer to a pair $(\lambda, \nu)$ with $\lambda \succeq 0$ and $(\lambda, \nu) \in \text{dom }g$ as *dual feasible*.

### The Lagrange Dual Function and Conjugate Functions

More generally, consider an optimization problem with linear inequality and equality constraints,

$$
\begin{gather}
\text{minimize } & f_0(x)
\\
\text{subject to } & A x \preceq b
\\
& Cx = d
\end{gather}
$$

$$
\begin{align}
g(\lambda, \nu) &= \inf_x \left(
f_0(x) + \lambda^T (Ax - b) + \nu^T (Cx -d)
\right)
\\
&= -b^T \lambda - d^T \nu + \inf_{x}\left(f_0(x) + (A^T \lambda + C^T \nu)^T x \right)
\\
&= -b^T \lambda - d^T \nu - \sup_{x}\left(-f_0(x) - (A^T \lambda + C^T \nu)^T x \right)
\\
&= -b^T \lambda - d^T \nu - f_0^*(-A^T \lambda - C^T \nu)
\end{align}
$$

-  The domain of $g$ follow $f_0^*$, $$\text{dom }g = \set{(\lambda, \nu) \mid -A^T\lambda - C^T \nu \in \text{dom }f_0^*}$$

---

## The Lagrange Dual Problem

For each pair $(\lambda, \nu)$ with $\lambda \succeq 0$, the Lagrange dual function $g(\lambda, \nu)$ gives us a lower bound on the optimal value $p^*$ of the optimization problem (called the *primal problem*)

The Lagrange dual problem associated with the original problem, defined as

$$
\begin{gather}
\text{maximize } & g(\lambda, \nu)
\\
\text{subject to } & \lambda \succeq 0
\end{gather}
$$

would give the best lower bound that can be obtained from the Lagrange dual function

- *dual feasible* to describe a pair $(\lambda, \nu)$ with $\lambda \succeq 0$ and $g(\lambda, \nu)> -\infty$
- $(\lambda^*, \nu^*)$ as *dual optimal* or optimal Lagrange multipliers if they are optimal for the dual problem
- The dual problem is a <span style="color: #EF5040">convex optimization problem</span> since the objective is concave, and the constraint is convex, regardless of the convexity of the primal problem since the objective is concave, and the constraint is convex, regardless of the convexity of the original primal problem

### Making Dual Constraints Explicit

Identify the affine hull of $\text{dom }g$ and describe it as a set of linear equality constraints.

- The dual function of the standard form LP

$$
\begin{gather}
g(\lambda, \nu) =
\begin{dcases}
-b^T \nu, & A^T \nu - \lambda + c = 0
\\
-\infty, & \text{otherwise}
\end{dcases}
\end{gather}
$$

The Lagrange dual problem then can be rewritten as

$$
\begin{gather}
\text{maximize } & -b^T \nu
\\
\text{subject to } & A^T \nu - \lambda  + c =0
\\
&\lambda \succeq 0
\end{gather}
$$
And equivalent to 
$$
\begin{gather}
\text{maximize } & -b^T \nu
\\
\text{subject to } & A^T \nu   + c \succeq0
\end{gather}
$$

which is an LP in inequality form

The dual of a standard form LP is an inequality form LP, and vice versa.

- The dual of an LP in inequality form

$$
\begin{gather}
\text{minimize }& -b^T \lambda
\\
\text{subject to } & A^T \lambda + c = 0
\\ & \lambda \succeq 0
\end{gather}
$$

### Weak Duality

The property

$$
\begin{gather}
d^* \le p^*
\end{gather}
$$

which holds even if the original problem is not convex. This property is called *weak duality*.

- The weak duality inequality holds even when $d^*$ and $p^*$ are infinite.
    - For example, if the primal problem is unbounded below, so that $p^* = -\infty$, we must have $d^*=-\infty$, i.e., the Lagrange dual problem is feasible
    - Conversely, if the dual problem is unbounded above, so that $d^* = \infty$, we must have $p^* = \infty$, i.e. the primal problem is infeasible
- The difference $p^* - d^*$ is called the *optimal duality gap* of the original problem, which is always nonnegative
- The bound can sometimes be used to find a lower bound on the optimal value of a problem that is difficult to solve, since the dual problem is always convex, and in many cases can be solved efficiently, to find $d^*$.

### Strong Duality

If the equality $d^* = p^*$ holds, i.e., the optimal duality gap is zero, then we say that strong duality holds.

- Strong duality does not always hold. But if the primal problem is convex, we usually (almost always) have strong duality.

#### Slater's Theorem


If the problem is convex and Slater's condition holds, then the strong duality holds.

- TL;DR of Slater's condition
    - Exist a strictly feasible $x$ for all non-affine inequality constraints
    
A convex optimization problem is said to satisfy the *Slater's condition* if there exists an $x \in \text{relint } \mathcal D \subseteq \mathbf R^n$ such that

$$
\begin{gather}
f_i(x) < 0, i=1, \dots, m, & Ax = b
\end{gather}
$$

Such a point is sometimes called strictly feasible.

#### Refined Slater's Condition


If the problem is convex and the refined Slater's condition holds, then the strong duality holds.

Suppose the first $k$ constraint functions $f_1, \dots, f_k$ are affine in an optimization problem. Then the problem is said to satisfy the *refined (weak) Slater's condition* if there exists an $x \in \text{relint } \mathcal D \subseteq \mathbf R^n$ such that

$$
\begin{gather}
f_i(x) \le 0, & i=1, \dots, k
\\
f_i(x) < 0, & i=k+1, \dots, m, & Ax =b
\end{gather}
$$

- The refined Slater's condition reduces to feasibility when the constraints are all linear equalities and inequalities, and, $\text{dom }f_0$ is open

- Slater's condition also implies that the dual optimal value is attained when $d^* > -\infty$, i.e., there exists a dual feasible $(\lambda^*, \nu^*)$ with $g(\lambda^*, \nu^*) = d^* = p^*$

---

## Optimality Conditions

### Certificate of Suboptimality and Stopping Criteria

If we can find a dual feasible $(\lambda, \nu)$, we establish a lower bound on the optimal value of the primal problem: $p^* \ge g(\lambda, \nu)$. It provides a proof or *certificate* that $p^* \ge g(\lambda, \nu)$.

- This established that $x$ is $\epsilon$-suboptimal, with $\epsilon = f_0(x) - g(\lambda, \nu)$.
    - It also establishes that $(\lambda, \nu)$ is $\epsilon$-suboptimal for the dual problem

- We refer to the gap between primal and dual objectives, $$
\begin{gather}
f_0(x) - g(\lambda, \nu)
\end{gather}
$$ as the duality gap associated with the primal feasible point $x$ and dual feasible point $(\lambda, \nu)$


- If the duality gap of the primal dual feasible pair $x$, $(\lambda, \nu)$ is zero, i.e., $f_0(x) = g(\lambda, \nu)$, then $x$ is *primal optimal* and $(\lambda, \nu)$ is *dual optimal*
    - $(\lambda, \nu)$ is a certificate that proves $x$ is optimal
    - $x$ is a certificate that proves $(\lambda, \nu)$ is dual optimal


- These provide non-heuristic stopping criteria

### Complementary Slackness

Suppose that the primal and dual optimal values are attained and equal (i.e. strong duality holds). Let $x^*$ be a primal optimal and $(\lambda^*, \nu^*)$ be a dual optimal point. This means that

$$
\begin{align}
f_0(x^*) = g(\lambda^*, \nu^*) &=
\inf_x \left(f_0(x) + \lambda^{*T} f_{1:m}(x) + \nu^{*T} h_{1:p}(x)\right)
\\
&\le f_0(x^*) + \lambda^{*T} f_{1:m}(x^*) + \nu^{*T} h_{1:p}(x^*)
\\
&\le f_0(x^*)
\end{align}
$$

- $x^*$ minimizes $L(x, \lambda^*, \nu^*)$ over $x$
- The condition is known as *complementary slackness*: $\lambda_i^* f_i(x^*) = 0$
    - it holds for any primal optimal $x^*$ and any dual optimal $(\lambda^*, \nu^*)$ (when strong duality holds)
    - $\lambda_i^* > 0 \implies f_i(x^*) = 0$ (tight)
    - $f_i(x^*) < 0 \implies \lambda_i=0$ (slack)
    - Roughly speaking, this means the $i$th optimal Lagrange multiplier is zero unless the $i$th constraint is active at the optimum.

### KKT Optimal Conditions


1. primal constraints $f_{1:m}(x^*)\preceq 0$, $h_{1:p}(x^*) =0$
2. dual constraints: $\lambda^* \succeq 0$
3. complementary slackness $\lambda^Tf_{1:m}(x^*)=0$
4. gradient of Lagrangian w.r.t. $x^*$ vanishes:
$$
\nabla f_0(x^*) + \lambda ^{*T} \nabla f_{1:m}(x^*) + \nu^{*T} \nabla h_{1:p}(x^*)  = 0
$$

For any optimization problem with differentiable objective and constraint functions for which strong duality obtains, any pair of primal and dual optimal points $(x^*, \lambda^*, \nu^*)$ must satisfy the KKT conditions

Vice versa, any point satisfy KKT conditions are primal and dual optimal, and have zero duality gap.

- If Slater's conditions is satisfied, $x$ is optimal iff there exists $\lambda, \nu$ that satisfy KKT conditions

## Examples

### Equality Constrained Norm Minimization

- Consider the problem

$$
\begin{gather}
\text{minimize } & \Vert x \Vert_2
\\
\text{subject to } & Ax = b
\end{gather}
$$
- The conjugate of $f_0 = \Vert \cdot \Vert_2$ is given by

$$
f_0^*(y) = 
\begin{dcases}
0, & \Vert y\Vert_2 \le 1\\
\infty, & \text{otherwise}
\end{dcases}
$$

- The dual function for the problem is given by

$$
\begin{gather}
g(\nu) = -b^T \nu - f_0^*(-A^T \nu)
=
\begin{dcases}
-b^T \nu, & \Vert A^T \nu\Vert_2 \le 1
\\
-\infty, & \text{otherwise}
\end{dcases}
\end{gather}
$$

### Entropy Maximization

- Consider the entropy maximization problem

$$
\begin{gather}
\text{minimize } & f_0(x)  = \sum\limits^n_i x_i \log x_i
\\
\text{subject to } & Ax \preceq b
\\ & \mathbf 1^T x = 1
\end{gather}
$$

where $\text{dom }f_0 = \mathbf R^n_{++}$.

$$
\begin{gather}
f_0^*(y) = \sum\limits_i^n {e^{y_i -1}}
\end{gather}
$$

Therefore, the dual function is given by

$$
\begin{align}
g(\lambda, \nu) &= -b^T \lambda - \nu - \sum\limits_i^n e^{-a_i^T \lambda - \nu - 1}
\\
&= -b^T \lambda - \nu - e^{-\nu-1}\sum\limits_i^n e^{-a_i^T\lambda}
\end{align}
$$

The (weaker) Slater condition tells us that the optimal duality gap is zero if there exists an $x\succ 0$ with $Ax \preceq b$ and $1^T x = 1$ (i.e., all inequalities are affine, so the slater condition is satisfied)

Then the dual problem can be solved by first reducing $\nu$ by 

$$
\begin{gather}
\nabla_\nu g(\lambda, \nu) =0
\\
\implies \nu=\log\sum\limits_{i=1}^n{e^{-a_i^T \lambda}-1}
\end{gather}
$$
The dual problem becomes geometric program (in convex form) with nonnegativity constraints.

$$
\begin{gather}
\text{maximize } & -b^T \lambda -\log\left(\sum\limits_{i=1}^n e^{-a_i^T \lambda}\right)
\end{gather}
$$

---

### Two-Way Partitioning Problem

- weak duality

$$
\begin{gather}
\text{minimize } & x^T W x
\\
\text{subject to } & x_i^2 = 1, &i=1,\dots, n
\end{gather}
$$

where $W\in\mathbf S^n$ (non-convex, since $W \notin \mathbf S^n_+$)

The Lagrangian is

$$
\begin{gather}
L(x, \nu) = x^T W x + x^T \text{diag}(\nu)x - \nu^T 1
\end{gather}
$$

The dual function:

$$
\begin{align}
g(\nu)
&= \inf_x x^T (W + \text{diag}(\nu))x - 1^T \nu
\\
&= 
\begin{dcases}
-1^T \nu, & W + \text{diag}(\nu) \succeq 0,
\\
-\infty, & \text{otherwise}
\end{dcases}
\end{align}
$$

The dual problem is a semidefinite program (SDP).

$$
\begin{gather}
\text{maximize } & -1^T \nu
\\
\text{subject to } & W + \text{diag}(\nu) \succeq 0,
\end{gather}
$$
with variable $\nu \in \mathbf R^n$.

This gives

$$
\begin{gather}
p^* \ge d^* \ge n\lambda_{min}(W)
\end{gather}
$$

### Equality Constrained Convex Quadratic Minimization

$$
\begin{gather}
\text{minimize } &  \frac{1}{2}x^T P x + q^T x + r
\\
\text{subject to } & Ax = b
\end{gather}
$$

where $P \in \mathbf S^n_+$.

The KKT conditions for this problem are

$$
\begin{gather}
Ax^* = b,\, P x^* + q + A^T \nu^* = 0
\\\\
\iff
\begin{bmatrix}
P & A^T \\
A & 0
\end{bmatrix}
\begin{bmatrix}
x^* \\ v^*
\end{bmatrix}
=
\begin{bmatrix}
-q \\ b
\end{bmatrix}
\end{gather}
$$
solving this set of $m+n$ equations in the $m+n$ variables in $x^*, \nu^*$ gives the optimal primal and dual variables for the problem.

### Water Filling

$$
\begin{gather}
\text{minimize } & - \sum\limits_{i=1}^n\log (\alpha_i + x_i)
\\
\text{subject to} & x\succeq 0 
\\& 1^T x = 1
\end{gather}
$$

where $\alpha_i > 0$.

KKT conditions:

$$
\begin{gather}
x^*\succeq 0
\\
1^T x^* = 1
\\
\lambda^* \succeq 0
\\
\lambda^{*T} x^* = 0
\\
\nabla_{x^*}L(x, \lambda, \nu)_i= -\frac{1}{x^*_i + \alpha_i} - \lambda_i^* + \nu^* = 0
\end{gather}
$$
where, $\nu^* \in \mathbf R$, $\lambda^* \in \mathbf R^n$

These equations can be directly solved.

- Start by noting $\lambda_i^*$ acts as a slack variable, then
$$
\begin{gather}
x^*\succeq 0
\\
1^T x^* = 1
\\
(-\frac{1}{x_i^* + \alpha_i} + \nu) x_i^* = 0
\\
 \nu \ge \frac{1}{x^*_i + \alpha_i}
\end{gather}
$$

- If $x_i^* > 0$, this implies $\nu=\frac{1}{x_i^* +\alpha_i}$, and thus $\nu^* < \frac{1}{\alpha_i}$.
- If $\nu^* > \frac{1}{x_i^* + \alpha_i}$, then $x_i^* = 0$, resulting $\nu \ge \frac{1}{\alpha_i}$

Thus

$$
\begin{align}
x_i &= 
\begin{dcases}
\frac{1}{\nu^*} - \alpha_i, & \nu^* < \frac{1}{\alpha_i}
\\
0, & \nu^* \ge \frac{1}{\alpha_i}
\end{dcases}
\\\\
&= \max \{0, \frac{1}{\nu^*} - \alpha_i\}
\end{align}
$$
Then substituting this into $1^T x^* = 1$ we obtain

$$
\begin{gather}
\sum\limits_i^n \max \{0, \frac{1}{\nu^*} - \alpha_i\} = 1
\end{gather}
$$

The left-hand side is a piecewise-linear increasing function of $\frac{1}{\nu^*}$, with breakpoints at $\alpha_i$, so the equation has a unique solution which is readily determined.

---

### Linear Constrained Convex Quadratic Minimization

$$
\begin{gather}
\text{minimize } & \frac{1}{2}x^T P x + q^T x + r
\\
\text{subject to } & Ax \preceq b
\\ & Fx = g
\end{gather}
$$

where $x \in \mathbf R^n$, $P\in \mathbf S^n_{++}$

$$
\begin{gather}
L(x, \lambda, \nu) = 
\frac{1}{2}x^T P x + (q + A^T \lambda + F^T \nu) x + r -\lambda^T b - \nu^T g
\end{gather}
$$

$$
\begin{gather}
\nabla_x L(x, \lambda, \nu) = Px + (q + A^T \lambda + F^T \nu)=0
\\ \implies
x^* = -P^{-1}(q + A^T \lambda + F^T \nu)
\end{gather}
$$
$$
\begin{align}
g(\lambda, \nu) &= \inf_{x}L = L|_{x=x^*}
\\
&=
- \frac{1}{2}(q + A^T \lambda + F^T \nu)^T P^{-1} (q + A^T \lambda + F^T \nu)
\\
& \qquad- b^T\lambda - g^T \nu + r
\end{align}
$$
$$
\begin{gather}
\text{dom }g = \mathbf R^m \times \mathbf R^p
\end{gather}
$$

$$
\begin{gather}
\text{maximize } & g(\lambda, \nu)
\\
\text{subject to } & \lambda \succeq 0
\end{gather}
$$

- KKT
    - equality and inequality constraints
    - $\lambda^* \succeq 0$
    - $\lambda^{*T} (Ax^* - b) =0$
    - $\nabla_x L(x^*, \lambda^*, \nu^*) = 0$

$$
\begin{gather}

\end{gather}
$$