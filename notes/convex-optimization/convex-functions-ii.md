---
title: Convex Functions II
tags:
- Convex Optimization
- Cones
nav_visibility: normal
created: '2024-04-01'
last_modified: '2026-04-02'
lang: en
category: knowledge:textbook
---


## Generalized Inequality 123

### Proper Cone

A convex cone $K \subseteq \mathbf R^n$ is a proper cone if

- $K$ is closed (contains its boundary)
    - To show closed, check $\text{bd } K \in K$
- $K$ is solid (has nonempty interior)
    - To show solid, check $\text{int } K \in K$
- $K$ is pointed (contains no line)
    - To show pointed, check $v , -v \in K \implies v=0$

### Generalized Inequality

Generalized inequality defined by a proper cone $K$:

$$x \preceq_K y \iff y - x \in K$$
$$x \prec_K y \iff y - x \in \text{int } K$$

### Minimum & Minimal

- Minimum
    - All points are more than (or equal to) the minimum
- Minimal
    - No point is less than the minimal
    - A point $x \in S$ is the minimal element of $S$ iff $(x-K) \cap S = \set{x}$
    - A point $x \in S$ is the maximal element of $S$ iff $(x+K)\cap S = \set{x}$

![300](../assets/40a6a42fe1d98100.png)

- example ($K = \mathbf R^2_+$)
    - $x_1$ is the minimum element of $S_1$
    - $x_2$ is the minimal element of $S_2$

## Sublevel Sets


The $\alpha$-sublevel set of a function $f: \mathbf R^n \to \mathbf R$ is defined as

$$
\begin{gather}
C_\alpha = \set {x \in \text{dom } f \mid f(x) \le \alpha}
\end{gather}
$$

- Sublevel sets of a convex function are convex
    - If $f$ is a convex function, then for any $\alpha \in \mathbf R$, the $\alpha$-sublevel set, $C_\alpha$ is convex.
    - The converse is not true. A function can have all its sublevel sets convex, but not be a convex function. (e.g. $f(x) = -e^x$, its $C_\alpha = [-\log\alpha, \infty)$)
    - Likewise, if $f$ is concave, then its $\alpha$-superlevel set is a convex set

## Epigraph

> [!seealso] Graph
> The <span style="color: #EF5040">graph</span> of a function $f: \mathbf R^n \to \mathbf R$ is defined as 
> 
> $$
> \begin{gather}
> \set{(x, f(x)) \mid x \in \text{dom }}
> \end{gather}
> $$
> which is a subset of $\mathbf R^{n+1}$


The <span style="color: #EF5040">epigraph</span> of a function $f: \mathbf R^n \to \mathbf R$ is defined as

$$
\begin{gather}
\text{epi } f= \set{(x, t) \mid x\in \text{dom } f, t \ge f(x)}
\end{gather}
$$

which is a subset of $\mathbf R^{n+1}$

- A function is convex iff its epigraph is a convex set
- A function is concave iff its <span style="color: #EF5040">hypograph</span>, defined as $\text{hypo } f = \set{(x, t) \mid x \in \text{dom } f, t \le f(x)}$, is a convex set

- **Tip**: Prove a function is convex by showing its epigraph is a convex set


### Relation to First-Order Condition

Suppose $f$ is a convex function. if $(y, t) \in \text{epi }f$, then

$$
\begin{gather}
t \ge f(y) \ge f(x) + \nabla f(x)^T (y-x)
\\\\
\implies
\begin{bmatrix}
\nabla f(x) \\ -1
\end{bmatrix}^T
\begin{bmatrix}
y-x \\ t-f(x)
\end{bmatrix}
=
\begin{bmatrix}
\nabla f(x) \\ -1
\end{bmatrix}^T
\left(
\begin{bmatrix}
y \\ t
\end{bmatrix} -
\begin{bmatrix}
x \\ f(x)
\end{bmatrix}
\right)
\end{gather}
$$

That is the hyperplane defined by $(\nabla f(x), -1)$ is a supporting hyperplane to $\text{epi } f$ at the boundary point $(x, f(x))$.

## Jensen's Inequality

- Basic form, induced by the definition of convex function
$$
\begin{gather}
f(\theta x + (1-\theta) y) \le \theta f(x) + (1-\theta)f(y)
\end{gather}
$$

- Sum of finite points
$$
\begin{gather}
f(\theta^T x) \le \theta_1 f(x_1) + \dots + \theta_k f(x_k)
\end{gather}
$$

where $1^T \theta = 1$

- Sum of infinite points

$$
\begin{gather}
f\left(\int_S p(x) x dx\right)\le\int_Sp(x)f(x)dx
\end{gather}
$$

where $p(x) \ge 0$ on $S$, $\int_S p(x)dx = 1$, $S \subseteq \text{dom }f$

$$
\begin{gather}
f(\mathbb E[x]) \le \mathbb E [f(x)]
\end{gather}
$$
- Example: $z \in \mathbf R^n, \mathbb E[z] = 0$, and assume $Pr(x + z \in \text{dom } f) = 1$


---

## Operations Preserving Convexity of Functions

### Nonnegative Weighted Sum
- If $f$ is convex, and $\alpha \ge 0$, then $\alpha f$ is also convex
- If both $f_1$ and $f_2$ are convex, then $f_1 + f_2$ is also convex.
- More generally, If $f_1, \dots, f_n$ are convex functions, then any of their *conic combinations* $f = w_1 f_1 + \dots + w_n f_n$ is also convex (with $w \ge 0$). This is also called nonnegative weighted sum.


### Pre-composition with Affine

$f: \mathbf R^n \to \mathbf R$, $A \in \mathbf R^{n\times m}$, and $b\in \mathbf R^n$. Define $g: \mathbf R^m \to \mathbf R$ by
$$
\begin{gather}
g(x) = f(Ax + b)
\end{gather}
$$
with $\text{dom } g = \set{x \mid Ax + b \in \text{dom }f}$

- If $f$ is convex, then $g$ is also convex
- If $f$ is concave, then $g$ is also concave

### Pointwise Maximum

- $f_1, f_2$ are convex functions

$$
\begin{gather}
f(x) = \text{max }\set{f_1(x), f_2(x)}
\end{gather}
$$

where $f$ is their <span style="color: #EF5040">pointwise</span> maximum $f$, with $\text{dom } f = \text{dom } f_1 \cap \text{dom }f_2$, is also **convex**

- Examples:
    - A *piecewise-linear* function $f(x) = \text{max }\set{a_1^ x + b_1, \dots, a_L^T x + b_L}$ is convex, since the affine functions $a_i^T x + b_i$ are all convex.
    - Sum of $r$ largest components, $f(x) = \sum\limits^r x_{[i]}$ is convex.
        - And $f(x) = \sum\limits^r{w_i x_{[i]}}$ is also convex as long as $w_i$ are also nonincreasing.

### Pointwise Supremum

A pointwise supremum of a set of convex functions is a convex function.

$$
\begin{gather}
g(x) = \sup_{y\in \mathcal A} f(x, y)
\\\\
\text{dom }g = \set{x \mid (x, y) \in \text{dom }f \, \forall y \in \mathcal A, \sup_{y\in \mathcal A} f(x, y) < \infty }
\end{gather}
$$

- Similarly, the pointwise infimum of a set of concave functions is a concave function.

- In terms of epigraphs, the pointwise supremum of functions corresponds to the intersection of epigraphs: 

$$
\begin{gather}
g(x) = \sup_{y\in \mathcal A} f(x, y)
\\\\
\implies
\text{epi }g = \bigcap_{y\in \mathcal A} \text{epi } f(\cdot, y)
\end{gather}
$$
- We knew that [the intersection of a family of convex sets is convex](Convex%20Sets.md#Intersection%20Preserves%20Convexity)

> [!example] Example: Support function of a set is convex
> 
> $C \subseteq \mathbf R^n$ with $C\ne \emptyset$. The *support function* $S_C$ associated with the set $C$, defined as
> 
> $$
> \begin{gather}
> S_C(x) = \sup \set{x^T y \mid y \in C}
> \\\\
> \text{dom } S_C = \set{x \mid \sup_{y \in C}x^T y < \infty}
> \end{gather}
> $$
> the support function $S_C$ is convex even if $C$ is not a convex set.

- Distance to farthest point of a set, $f(x) = \sup_{y\in C} \Vert x - y \Vert$, is convex
- Maximum eigenvalue of a symmetric matrix, $f(X) = \sup \set{y^T X y \mid \Vert y \Vert_2 = 1}$, where $\text{dom } f \in \mathbf S^m$, is convex
- Norm of a matrix, $f(X) = \Vert X \Vert_2$ with $\mathbf R^{p\times q}$, where $\Vert \cdot\Vert_2$ denotes the *spectral norm* or *maximum singular value*, is convex.

### Minimization

If $f(x, y)$ is convex in $(x, y)$ and $C$ <span style="color: #EF5040">is a convex set</span> (in the case of [Pointwise Supremum](#Pointwise%20Supremum), its $\mathcal A$ does not need to be convex) and nonempty, then

$$
\begin{gather}
g(x) = \inf_{y\in C} f(x, y)
\\\\
\text{dom }g = \set{x \mid (x, y) \in \text{dom } f, \exists y \in C}
\end{gather}
$$

is convex

- $f(x, y) = x^T A x + 2x^T By + y^T C y$ with

$$
\begin{gather}
\begin{bmatrix}
A & B \\ B^T & C
\end{bmatrix}
\succeq 0
,& C \succ 0
\end{gather}
$$

minimizing over $y$ gives $g(x) = \inf_y f(x, y) = x^T(A - BC^{-1}B^T)x$. $g$ is convex, hence Schur complement $A - BC^{-1}B^T \succeq 0$

- distance to a set: $\text{dist}(x, S) = \inf_{y\in S} \Vert x - y \Vert$ is convex if $S$ is convex
### Scalar Composition

- $h: \mathbf R \to \mathbf R$ and $g: \mathbf R \to \mathbf R$, and $f = h \circ g: \mathbf R \to \mathbf R$.
- $\text{dom }f=\text{dom } g = \text{dom }h = \mathbf R$
- $f, g, h$ are differentiable

$$
\begin{gather}
f''(x) = h''(g(x))g'(x)^2 + h'(g(x))g''(x)
\end{gather}
$$
- $f$ is convex if $h$ is convex and increasing, $g$ is convex
- $f$ is convex if $h$ is convex and decreasing, $g$ is concave
- $f$ is concave if $h$ is concave and increasing, $g$ is concave
- $f$ is concave if $h$ is concave and decreasing, $g$ is convex
- $g$ can also be $\mathbf R^n \to \mathbf R$

- Examples:
    - If $g$ is convex then $\exp g(x)$ is convex
    - If $g$ is concave and positive then $\log g(x)$ is concave
    - If $g$ is concave and positive, then $1/g(x)$ is convex
    - If $g$ is convex and nonnegative and $p \ge 1$, then $g(x)^p$ is convex
    - If $g$ is convex then $-log(-g(x))$ is convex on $\set{x \mid g(x) < 0}$

#### Products & Ratios

- If $f$ and $g$ are convex, both nondecreasing (or both nonincreasing), and positive, then $fg$ is convex
    - If $f$ and $g$ are concave, with one nondecreasing and the other nonincreasing), and positive, then $fg$ is concave

$$
\begin{gather}
h'' = f'' g + 2f'g' + fg''
\end{gather}
$$

- If $f$ is convex, nondecreasing, and positive; $g$ is concave, nonincreasing, and positive, then $f/g$ is convex
    - Proof
        - If $g$ is positive and concave, $1/g$ is convex
        - $1/g$ is nondecreasing, for $g$ is nonincreasing
        - following first rule, $f \cdot 1/g$ is convex


### Vector Composition


- $h: \mathbf R^k \to \mathbf R$ and $g: \mathbf R^n \to \mathbf R^k$, and $f = h \circ g: \mathbf R^n \to \mathbf R$.
- $f(x) = h(g(x)) = h(g_1(x), \dots, g_k(x))$

$$
\begin{gather}
f''(x) = g'(x)^T \nabla^2h(g(x))g'(x)+\nabla h(g(x))^T g''(x)
\end{gather}
$$

- $f$ is convex if $h$ is convex and increasing in each arguments, and $g$ are convex
- $f$ is convex if $h$ is convex and decreasing in each arguments, and $g_i$ are concave
- $f$ is concave if $h$ is concave and increasing in each arguments, and $g_i$ are concave
- $f$ is concave if $h$ is concave and decreasing in each arguments, and $g_i$ are convex

- Examples
    - $h(z) = \log(\sum\limits_i^k e^{z_i})$ is convex and increasing  in each argument, so $\log(\sum\limits_i^k e^{g_i})$ is convex when $g_i$ are convex
    - For $0< p \le 1$, the function $h(z) = (\sum\limits_i^k z_i^p)^{1/p}$ on $\mathbf R^k_+$ is concave and nondecreasing in each component. So if $g_i$ are concave and nonnegative, we conclude that $f(x) =( \sum\limits_i^k g_i(x)^p)^{1/p}$ is concave.
        - $h$ can be extended to have the value $-\infty$ for $z\nsucceq 0$.
    - Suppose $p \ge 1$, $g_i$ are convex and nonnegative. Then the function $(\sum\limits_i^k g_i(x)^p)^{1/p}$ is convex.
    - The geometric mean $h(z)=(\prod_i^k z_i)^{1/k}$ on $\mathbf R^k_+$ is concave and its extension is nondecreasing in each argument. If $g_i$ are nonnegative concave, then their geometric mean is concave.

> [!seealso] $\frac{f^2}{g}$ is convex
> 
>  If
> - $g_1: \mathbf R^n \to \mathbf R, g_1(x) \ge 0$, convex
> - $g_2: \mathbf R^n \to \mathbf R, g_2(x) > 0$, concave
> 
> Then $\frac{g_1^2}{g_2}$ is convex.
> 
> Proof:
> 
> Let $h(x, y) = \frac{x^2}{y}$, which is a quadratic-over-linear function, and it is convex.
> 
> $$
> \begin{gather}
> f''(x) = g'(x)^T \nabla^2 h(g(x))g'(x) + \nabla h(g(x))^T g''(x)
> \end{gather}
> $$
> 
> Here the first term is nonnegative since $h(x, y)$ is convex. 
> 
> Since
> 
> $$
> \begin{gather}
> \nabla h(g_1(x), g_2(x)) = [a, b]^T, & a > 0, b < 0
> \\
> g''(x) = [g_1''(x), g_2''(x)]^T, & g_1''(x) \ge 0, g_2''(x) \le 0
> \\\\
> \implies \nabla h(g(x))^T g''(x) \ge 0
> \end{gather}
> $$
> 
> , $f''(x) \ge 0$
> 
> Also, since $\text{dom }g_1, \text{dom }g_2, \text{dom h}$ are convex, $f(x)$ is therefore convex.

---

## Conjugate Functions

$f: \mathbf R^n \to \mathbf R$. The function $f^*: \mathbf R^n \to \mathbf R$, defined as

$$
\begin{gather}
f^*(y) = \sup_{x\in \text{dom } f} \left(y^T x - f(x)\right)
\end{gather}
$$

is called the *conjugate* of the function $f$. The domain of $f^*$ is

$$
\begin{align}
\text{dom }f^*
&= \set{y \in \mathbf R^n \mid \big(y^T x - f(x)\big) \text{ is bounded above} }
\\\\
&= \set{y \in \mathbf R^n \mid \exists z \in \mathbf R \text{ s.t. } \forall x \in \text{dom } f, y^T x - f(x) < z}
\end{align}
$$

- A conjugate function is always convex
    - since it is the pointwise supremum of a family of affine/convex functions of $y$

### Examples
- $f(x) = ax+b$.
    - The function $yx - ax - b$ is bounded iff $y=a$.
    - Thus, $\text{dom }f^* = \set a$
    - $f^*(y) = b$

- $f(x) = -\log(x)$.
    - The function $yx + \log x$ is bounded above iff $y <0$.
    - Thus $\text{dom } f^* = -\mathbf R_{++}$
    - $f^*(y) = -\log(-y) -1$ for $y < 0$
- $f(x) = e^x$.
    - The function $xy - e^x$ is unbounded above if $y<0$.
    - It can be shown that $\text{dom } f^* = \mathbf R_+$ and

$$
\begin{gather}
f^*(y) = 
\begin{dcases}
y \log y - y, & y > 0
\\
0, & y=0
\end{dcases}
\end{gather}
$$

- $f(x) = x \log x$. Negative entropy. With $\text{dom } f = \mathbf R_+$ (and $f(0) = 0$)
    - $xy-x\log x$ is bounded above on $\mathbf R_+$ for all $y$
    - $f^*(y) = e^{y-1}$
- $f(x) = 1/x$ on $\mathbf R_{++}$
    - $yx - 1/x$ is unbounded above for $y > 0$
    - $f^*(y=0) = 0$
    - $f^*(y < 0) = \left[yx - 1/x\right]_{x=(-y)^{-1/2}} = -2(-y)^{1/2}$, with $\text{dom } f^* = -\mathbf R_+$

- $f(x) = \frac{1}{2} x^T Q x$, with $Q \in \mathbf S^n_{++}$, strictly convex quadratic function.
    - $y^T x - \frac{1}{2}x^T Q x$ is bounded above
    - maximum at $x=Q^{-1}y$
    -  $f^*(y) = \frac{1}{2} y^T Q^{-1}y$
- $f(x) = \log(\sum\limits_i^n e^{x_i})$
    - $\text{dom } f^* = \set{y \mid \mathbf 1^T y = 1, y \succeq 0}$
    - $f^*(y) = \sum\limits_i^n y_i \log y_i$
- $I_S(x) = 0$ on $\text{dom }I_S = S$
    - The set $S \subseteq \mathbf R^n$  is not necessarily to be convex
    - $I^*_S(y) = \sup_{x\in S} y^T x$ (which is the support function of the set $S$)

---

## Quasiconvex Functions

A function $f: \mathbf R^n \to \mathbf R$ is called *quasiconvex* if its domain is a convex set and all its sublevel sets are convex sets.

$$
\begin{gather}
S_\alpha = \set {x\in \text{dom } f \mid f(x) \le \alpha}
\end{gather}
$$

for $\alpha \in \mathbf R$, are convex sets.

- For a function on $\mathbf R$, quasiconvexity requires that each sublevel set be an interval
- A function is *quasiconcave* if $-f$ is quasiconvex, i.e. every superlevel set $\set{x \mid f(x) \ge \alpha}$ is convex.
- A function that is both quasiconvex and quasiconcave is called *quasilinear*. That is every *level set* $\set{x \mid f(x) = \alpha}$ is convex.

- Examples:
    - $\log x$ on $\mathbf R_{++}$ is quasiconvex, quasiconcave, quasilinear
    - $\text{ceil}(x)=\inf \set{z \in Z \mid z \ge x}$, $x \in \mathbf R$ is quasiconvex, quasiconcave, and quasilinear
    - $$f(x)=\begin{dcases}\max\set{i \mid x_i \ne 0} & x \ne 0\\0 & x=0\end{dcases}$$
        - The length of $x\in \mathbf R^n$, the largest index of a nonzero component, is quasiconvex
    - $f(x) = x_1 x_2$, $f: \mathbf R^2 \to \mathbf R$ on $\mathbf R^2_+$
        - $f$ is neither convex nor concave, but is quasiconcave on $\mathbf R^2_+$, since the superlevel sets $$\set{x \in \mathbf R^2_+ \mid x_1 x_2 \ge \alpha}$$ are convex for all $\alpha$.

### Jensen's Inequality for quasiconvex functions

A function $f$ is quasiconvex <span style="color: #EF5040">iff</span> $\text{dom }f$ is convex and for any $x, y \in \text{x, y} \in \text{dom  }f$ and $0\le \theta \le 1$

$$
\begin{gather}
f(\theta x + (1- \theta) y)) \le \max \set{f(x), f(y)}
\end{gather}
$$

### Continuous Quasiconvex Functions

A continuous function $f: \mathbf R \to \mathbf R$ is quasiconvex <span style="color: #EF5040">iff</span> at least one of the following conditions holds:

- $f$ is nondecreasing
- $f$ is nonincreasing
- There is a point $c \in \text{dom } f$ such that for $t \le c$, $f$ is nonincreasing, and for $t \ge c$ (and $t \in \text{dom } f$), $f$ is nondecreasing

### First-Order Conditions

Suppose $f: \mathbf R^n \to \mathbf R$ is differentiable. Then $f$ is quasiconvex iff $\text{dom }f$ is convex and for all $x, y \in \text{dom }f$

$$
\begin{gather}
f(y) \le f(x) \implies \nabla f(x)^T (y-x) \le 0
\end{gather}
$$

### Representation via Family of Convex Functions

We can find a family of convex functions $\phi_t: \mathbf R^n \to \mathbf R$, indexed by $t \in \mathbf R$, with

$$
\begin{gather}
f(x) \le t \iff \phi_t(x) \le 0
\end{gather}
$$

That is, the $t$-sublevel set of  the quasiconvex function $f$ is the $0$-sublevel set of the convex function $\phi_t$.

- $\phi_t$ must be a nonincreasing function of $t$, i.e., $\phi_s(x) \le \phi_t (x)$ whenever $s\ge t$
- Example
    - $$\phi_t(x) = \begin{dcases}0, & f(x) \le t \\ \infty, &\text{otherwise}\end{dcases}$$


