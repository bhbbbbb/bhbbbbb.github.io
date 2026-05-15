---
title: Convex Functions
tags:
- Convex Optimization
- Duality
- Convex Sets
nav_visibility: normal
created: '2024-03-13'
last_modified: '2024-04-11'
lang: en
category: knowledge:textbook
---


## Convex Functions

A function $f: \mathbf R^n \to \mathbf R$ is convex if $\text{dom } f$ is a convex set and if for all $x, y \in \text{dom } f$ and for all $\theta \in [0, 1]$

$$
\begin{gather}
f(\theta x + (1-\theta)y) \le \theta f(x) + (1-\theta) f(y)
\end{gather}
$$

- The line segment between $(x, f(x))$, and $(y, f(y))$, which is the *chord* from $x$ to $y$, lies above the graph
- $\text{epi } f$ is a convex set

- A function $f$ is *strictly convex*, if strict inequality holds whenever $x \ne y$ and $0 < \theta < 1$

$$
\begin{gather}
f(\theta x + (1-\theta) y) < \theta f(x) + (1-\theta) f(y)
\end{gather}
$$
- we say $f$ is *concave* if $-f$ is convex
    - *strictly concave* if $-f$ is strictly convex
- Affine function always have the equality, so all affine functions are both convex and concave
    - Conversely, any function that is convex or concave is affine
- A function is convex iff it is convex when restricted to any line that intersects its domain. That is, the function $g: \mathbf R \to \mathbf R$

$$
\begin{gather}
g(t) = f(x+tv), & \text{dom }g=\set{t \mid x+tv \in \text{dom }f}
\end{gather}
$$

is convex (in $t$), for any $x \in \text{dom } f, v\in \mathbf R^n$

- A convex function is continuous on the [relative interior](Convex%20Sets.md#Relative%20Interior)) of its domain; it can have discontinuities only on its relative boundary.

### Extended-Value Extensions

If $f$ is convex we define its extended-value extension $\tilde f: \mathbf R^n \to \mathbf R \cap \set{\infty}$ by

$$
\begin{gather}
\tilde f(x) =
\begin{dcases}
f(x) & x \in \text{dom } f
\\\\
\infty & x \notin \text{dom } f
\end{dcases}
\end{gather}
$$

## First-Order Conditions

Suppose $f$ is differentiable (implying the $\text{dom } f$ is open). Then $f$ is convex iff $\text{dom } f$ is convex and 

$$
\begin{gather}
f(y) \ge f(x) + \nabla f(x)^T (y-x), & \forall x, y \in \text{dom }f
\end{gather}
$$

- The first-order Taylor approximation is a global under-estimator of the function
    - Conversely, if the first-order Taylor approximation of a function is always under-estimator of the function, then the function is convex.

- $f$ is strictly convex <span style="color: #EF5040">iff</span> $\text{dom } f$ is convex and for $x, y \in \text{dom } f, x\ne y$, we have

$$
\begin{gather}
f(y)  > f(x) + \nabla f(x)^T (y-x)
\end{gather}
$$

## Second-Order Conditions

Assume $f$ is twice differentiable, that is its Hessian or second derivative $\nabla^2 f$ exists a each point in $\text{dom } f$ (open). Then $f$ is a convex iff $\text{dom } f$ is convex and its Hessian is positive semidefinite:

$$
\begin{gather}
\nabla^2 f(x) \succeq 0, & \forall x \in \text{dom } f
\end{gather}
$$

- <span style="color: #EF5040">If</span> $\nabla^2 f(x) \succ 0, \forall x \in \text{dom } f$ where $\text{dom } f$ is convex, then $f$ is strictly convex
    - <span style="color: #EF5040">The converse is not true</span>. E.g. $f(x) = x^4$ is strictly convex, but $\nabla^2 x^4\vert_{x=0} = 0$

## Examples

- Exponential: $e^{ax}$, is convex on $\mathbf R$ for any $a\in \mathbf R$
- Powers: $x^p$, is convex on $\mathbf R_{++}$ when $p \ge 1$ or $p \le 0$; it is concave on $\mathbf R_{++}$ when $0 \le p \le 1$
- Powers of absolute value: $|x|^p$, is convex on $\mathbf R$ with $p \ge 1$
- Logarithm: $\log x$ is concave on $\mathbf R_{++}$
- Negative entropy $x\log x$ is convex on $\mathbf R_{++}$ (also $\mathbf R_+$ if $x\log x |_{x=0}\triangleq  0$)
- Norms. Every norm on $\mathbf R^n$ is convex
    - Since $f$ satisfies the triangle inequality and $f$ is homogeneous. 
    - If norm defined on $0< p < 1$, then it's concave
- Max function. 
- Quadratic-over-linear function. $f(x, y)=x^2/y$ with $\text{dom }f = \mathbf R \times \mathbf R_{++}$, is convex.
$$
\begin{gather}
\nabla^2 f(x, y) = \frac{2}{y^3}
\begin{bmatrix}
y^2 & -xy \\
-xy & x^2
\end{bmatrix}
= \frac{2}{y^3}
\begin{bmatrix}
y \\ -x
\end{bmatrix}
\begin{bmatrix}
y \\ -x
\end{bmatrix}
^T
\succeq 0
\end{gather}
$$


- Log-sum-exp. The function $f(x) = \log \sum\limits \exp x_i$ is convex on $\mathbf R^n$
- Geometric mean. $f(x) = (\prod x_i)^{1/n}$ is concave on $\text{dom }f=\mathbf R^{n}_{++}$ since its $\nabla^2 f(x) \preceq 0$.
- Log-Determinant: $f(X) = \log \det X$. The function $f: \mathbf S^n \to \mathbf R$, with $\text{dom }f = \mathbf {S}_{++}^n$ is concave.

> [!seealso]- proof of concavity of log-determinant
> $$
> \begin{align}
> g(t) &= \log \det (X + tV)
> \\\\
> &= \log\det(X^{1/2}IX^{1/2} + tV) & \text{Since } X \succ 0
> \\\\
> &= \log\det\left(X^{1/2}(I+ tX^{-1/2}V X^{-1/2})X^{1/2} \right)
> \\\\
> &= \log \left( \det X \cdot \det(I+ tX^{-1/2}V X^{-1/2}) \right)
> \\\\
> &= \log\det X+ \log\det(I+ tX^{-1/2}V X^{-1/2}) 
> \end{align}
> $$
> 
> We need to show $g(t)$ is convex, and thus the first term can be dropped.
> 
> $$
> \begin{gather}
> h(t) = \log\det (I + t U)
> = \sum\limits_i \log(1+t\lambda_i)
> \end{gather}
> $$
> Then we can find $h(t)$ is concave for $\log(1+t \lambda_i)$ are concave for any $\lambda_i$ (that is, for any $V$).
