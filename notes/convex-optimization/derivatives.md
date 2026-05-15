---
title: Derivatives
tags:
- Convex Optimization
- Convex Sets
nav_visibility: normal
created: '2024-03-27'
last_modified: '2024-05-18'
lang: en
category: knowledge:textbook
---


## Derivatives

Suppose $f: \mathbf R^n \to \mathbf R^m$ and $x \in \text{int } \text{dom } f$.

- $D f(x) \in \mathbf R^{m\times n}$, the *derivative* (or *Jacobian*) of $f$ at $x$

## First-Oder Approximation

$$
\begin{gather}
\hat f(z) = f(x) + D f(x) (z-x)
= f(x) + \nabla f(x)^T (z-x)
\end{gather}
$$

## Gradient

- $f$ is real-valued (i.e., $f: \mathbf R^n \to \mathbf R$) the derivative $D f(x)$ is a $1\times n$ matrix, i.e., it's a <span style="color: #EF5040">row vector</span>.

The *gradient* of $f$
$$
\begin{gather}
\nabla f(x) = D f(x)^T
\end{gather}
$$

is a <span style="color: #EF5040">column vector</span>.


## Second-Oder Approximation

$$
\begin{gather}
\nabla^2 f(x) = D \nabla f(x)
=
\begin{bmatrix}
\frac{\partial f}{\partial x_1 \partial x_1} & \frac{\partial f}{\partial x_1 \partial x_2}
\\
\frac{\partial f}{\partial x_2 \partial x_1} & \frac{\partial f}{\partial x_2 \partial x_2}
\\ & & \ddots
\end{bmatrix}
\\\\
\hat f(z) = f(x) + \nabla f(x)^T (z-x) +  \frac{1}{2}(z-x)^T \nabla^2 f(x) (z-x)
\end{gather}
$$


---
## Example

$$
\begin{gather}
f(x) = \frac{1}{2} x^T P x + q^T x + r
\\\\
D f(x) = \frac{1}{2} x^T(P+P^T) + q^T = x^T P +q^T
\\\\
\nabla f(x) = P x + q
\\\\
\nabla^2 f(x) = \frac{1}{2}(P+P^T) = P
\end{gather}
$$
where $P \in \mathbf S^n, q \in \mathbf R^n, r \in \mathbf R$.

## Trace

The trace of $X \in \mathbf R^{n\times n}$ is defined as the sum of its diagonals.

$$
\begin{gather}
\text{tr}(A) = \sum\limits_{i\in n} a_{ii}
\end{gather}
$$
If $X \in \mathbf S^{n}$, then its trace can also be expressed as the summation of its eigenvalues.

$$
\begin{gather}
\text{tr}(A) = \sum\limits_{i\in n} a_{ii} = \sum\limits_{i\in n} \lambda_i
\end{gather}
$$

## Gradient of Functions on Symmetric Matrices

If $f: \mathbf S^n \to \mathbf R$, then the gradient of $f$ is defined as

$$
\begin{gather}
\nabla f(X) = \text{svec}^{-1}\big(\nabla \tilde f (\text{svec}(X))\big)
\end{gather}
$$

where $\text{svec}: \mathbf S^n \to \mathbf R^{n(n+1)/2}$, and $\tilde f: \mathbf R^{n(n+1)/2}\to \mathbf R$

- $f: \mathbf S^n \to \mathbf R$ be defined as $f(X) = \text{tr}(AX)$ where $A \in \mathbf R^{n\times n}$

$$
\begin{gather}
\nabla f(X) = \frac{A+A^T}{2}
\end{gather}
$$

If $A\in \mathbf S^n$, then $\nabla f(x) = A$

---

## Chain Rule

- $f: \mathbf R^n \to \mathbf R^m$ is differentiable
- $g: \mathbf R^m \to \mathbf R^p$
- $h: \mathbf R^n \to \mathbf R^p$
- $h(z) = g(f(z))$

$$
\begin{gather}
D h(x) = Dg(f(x)) Df(x)
\\\\
\nabla h(x) = g'(f(x)) \nabla f(x)
\end{gather}
$$
