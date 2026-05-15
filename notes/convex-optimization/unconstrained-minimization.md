---
title: Unconstrained Minimization
tags:
- Convex Optimization
- Duality
nav_visibility: normal
created: '2024-05-27'
last_modified: '2024-05-27'
lang: en
category: knowledge:textbook
---
## Unconstrained Minimization Problems



## Steepest Descent Method

- *Directional derivative*
    - For the first-order Taylor approximation of $f(x+v)$ around $x$ is $$f(x+v) = f(x) + \nabla f(x)^T,$$ where the term $\nabla f(x)^T v$ is the *directional derivative* of $f$ at $x$ in the direction $v$.
- *Normalized steepest descent direction* (w.r.t. an unspecified norm $\Vert \cdot \Vert$)$$\Delta x_{\text{nsd}} = \arg\min_v \set{\nabla f(x)^T v \mid \Vert v \Vert =1}$$, which is a step of unit norm that gives the largest decrease in the linear approximation of $f$.
- *Steep descent step* (aka *steepest descent direction*) $$\Delta x_{\text{sd}} = \Vert \nabla f(x)\Vert_* \Delta x_{\text{nsd}}$$
- We have $$\nabla f(x)^T \Delta x_{\text{sd}} = \Vert \nabla f(x) \Vert_* \nabla f(x)^T \Delta x_{\text{nsd}} = - \Vert \nabla f(x) \Vert_*^2$$
    - If the norm is Euclidean norm $\Vert \cdot \Vert_2$ , then the steepest descent direction is simply the negative gradient, i.e., $\Delta x_{\text{sd}} = - \nabla f(x)$
    - In this case, $$\Delta x_{\text{nsd}} = \frac{-\nabla f(x)}{\Vert \nabla f(x)\Vert_2}$$
    - And then the steepest descent method for the Euclidean norm coincides with the gradient descent method.
### Steep Descent Algorithm

The steepest descent method uses the steepest descent direction as search direction.


```pseudo
\begin{algorithm}
\caption{Steepest descent method}
\begin{algorithmic}
\State \textbf{given} a starting point $x \in \text{dom }f$
\Repeat
\State 1. Compute steepest descent direction $\Delta x_{\text{sd}}$
\State 2. Line search. Choose $t$ via backtracking or exact line search.
\State 3. Update. $x \gets x + t \Delta x_{\text{sd}}$
\Until {stpping criterion is satisfied}
\end{algorithmic}
\end{algorithm}
```

- When exact line search is used, scale factors in the descent direction have no effect, so the normalized or unnormalized direction can be used.


### Steepest Descent for Quadratic Norm

We consider the quadratic norm

$$
\begin{gather}
\Vert z \Vert_P = (z^T P z)^{1/2} = \Vert P^{1/2}z \Vert_2
\end{gather}
$$

where $P \in \mathbf S^n_{++}$

The normalized steepest descent direction is given by

$$
\begin{gather}
\Delta x_{\text{nsd}} = - (\nabla f(x)^T P^{-1} \nabla f(x))^{-1/2} P^{-1} \nabla f(x)
\end{gather}
$$

The dual norm is given by $\Vert z \Vert_* = \Vert P^{-1/2}z \Vert_2$, so the steepest descent step with respect to $\Vert \cdot\Vert_P$ is given by

$$
\begin{gather}
\Delta x_{\text{sd}} = - P^{-1} \nabla f(x)
\end{gather}
$$

- The $\Delta x_{\text{sd}}$ can be interpreted as the gradient search direction after a change of coordinates is applied to the problem.
 - Define $\bar u = P^{1/2} u$, so we have $\Vert u \Vert_P = \Vert \bar u \Vert _2$. Using this change of  coordinates, we can solve the original problem of minimizing $f$ by solving the equivalent problem of minimizing the function $\bar f: \mathbf R^n \to \mathbf R$, given by $$\bar f(\bar u) = f(P^{-1/2}\bar u) = f(u)$$
- gradient to $\bar f$ $$\Delta \bar x = -\nabla \bar f(\bar x) = - P^{-1/2}\nabla f(P^{-1/2}\bar x) = - P^{-1/2} \nabla f(x)$$
- gradient search direction corresponds to the direction $$\Delta x = P^{-1/2} (- P^{-1/2} \nabla f(x)) = - P^{-1}\nabla f(x)$$ for the original variable $x$

### Choice of Norm

- The choice of norm used to define the steep descent direction can have a dramatic effect on the convergence rate.
- The gradient method works well when the condition numbers of the sublevel sets (or the Hessian near the optimal point) are moderate, and works poorly when the condition numbers are large.
- If an approximation $\hat H$ of the Hessian at the optimal point $H(x^*)$ were known, a very good choice of $P$ would be $P=\hat H$, since the Hessian of $\bar f$ at the optimum is then $$\hat H ^{-1/2} \nabla^2 f(x^*) \hat H^{-1/2} \approx I$$ and so is likely to have a low condition number.


## Dual Norm

Given any norm $\Vert \cdot \Vert$, the associated dual norm, denoted by $\Vert \cdot \Vert_*$, is defined as

$$
\begin{gather}
\Vert z \Vert_* = \sup\set{z^T x \mid \Vert x\Vert \le 1}
\end{gather}
$$

- For Euclidean norm $\Vert \cdot \Vert_2$, the associated dual norm is itself $$\Vert z\Vert_* = \sup\set{z^T x \mid \Vert x\Vert_2 \le 1} = \frac{z^Tz}{\Vert z\Vert_2} = \Vert z\Vert_2$$

