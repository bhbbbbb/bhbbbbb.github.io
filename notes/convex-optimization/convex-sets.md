---
title: Convex Sets
tags:
- Convex Optimization
- Convex Sets
- Cones
nav_visibility: normal
created: '2024-03-08'
last_modified: '2024-03-27'
lang: en
category: knowledge:textbook
---


## Mathematical Optimization Problems

$$
\begin{gather}
\text{minmize } f_0(x)
\\
\text{subject to } f_i(x) \le b_i, & i = 1, \dots, m
\end{gather}
$$

where
- $x=[x_1, \dots, x_n]^T \in \mathbf {R}^n$: optimization variables
 - $f_0: \mathbf R^n \to \mathbf R$: objective function
 - $f_i: \mathbf R^n \to \mathbf R$: constraint functions
 - $b_i \in \mathbf R$
 - $x^*$: *optimal* or a *solution* of the problem


### Linear Programming

An [optimization problem](#Mathematical%20Optimization%20Problems) is called *linear program* if the objective and constraint functions are linear:

$$
\begin{gather}
f_i(\alpha x + \beta y) = \alpha f_i(x) + \beta f_i(y)
\end{gather}
$$

for all $x, y \in \mathbf R^n$ and all $\alpha, \beta \in \mathbf R$

> [!note] Nonlinear programming
> An optimization problem that is not linear is called a *nonlinear program*.

### Least-Squares Problems

A least-squares problem is an optimization problem with <span style="color: #EF5040">no constraints</span> (i.e., $m=0$), and the objective function is defined as

$$
\begin{gather}
\text{minimize } f_0(x)=\lVert Ax - b\rVert^2_2 = \sum\limits_{i\in k}(a_i^T x - b_i)^2
\end{gather}
$$

where $A\in \mathbf R^{k\times n}$ (<span style="color: #EF5040">with</span> $k\ge n$)

- Analytical solution $x =(A^T A)^{-1} A^T b$ (when $A^TA$ is invertible)

> [!seealso]- Proof
> $$
> \begin{gather}
> \frac{d}{dx}\lVert Ax-b \rVert_2^2 = \frac{d}{dx}(Ax-b)^T(Ax-b) =0
> \\\\
> \text{let } c=Ax-b, \text{ then}
> \\\\
> \frac{d (Ax-b)}{dx} \frac{d c^Tc}{dc} =0
> \\\\
> A^T \times 2(Ax-b) = 0
> \\\\
> \implies A^T A x - A^T b =0
> \end{gather}
> $$


### Convex Optimization Problems


An [optimization problem](#Mathematical%20Optimization%20Problems) is called *convex optimization problem* if the objective and constraint functions are *convex*:

$$
\begin{gather}
f_i(\alpha x + \beta y) \le \alpha f_i(x) + \beta f_i(y)
\end{gather}
$$

for all $x, y \in \mathbf R^n$ and $\alpha, \beta \in \mathbf R$, with $\alpha, \beta \ge 0, \alpha, \beta = 1$

- Convex optimization problems are more general than linear programs and least-squares problems
    - I.e. Linear functions are convex
    - Linear programs are boundary cases when the equality holds
    - Image convex function is like a convex (bowl)
        - Linear function having zero curvature is like a plane

---

## Affine Sets

### Line

Let $x_1, x_2 \in \mathbf R^n$ and $x_1 \ne x_2$. The set of all points

$$
\begin{gather}
\set{\theta x_1 + (1-\theta)x_2 \mid \theta \in \mathbf R}
\end{gather}
$$

is called a *line* passing through $x_1$ and $x_2$

### Line Segment

Let $x_1, x_2 \in \mathbf R^n$ and $x_1 \ne x_2$. The set of all points

$$
\begin{gather}
\set{\theta x_1 + (1-\theta)x_2 \mid \theta \in \mathbf R, 0\le \theta \le 1}
\end{gather}
$$

is called a *(closed) line segment* between $x_1$ and $x_2$

### Affine Sets

> [!note] Affine Combination
> Lets $x_1, x_2, \dots, x_k \in \mathbf R^n$. Then, a point of the form
> 
> $$
> \begin{gather}
> \theta_1 x_1 + \dots + \theta_k x_k
> \\\\
> \text{with } \theta_1 +\dots + \theta_k = 1
> \end{gather}
> $$
> is referred to as an *affine combination* of the points $x_1, x_2, \dots, x_k$.
>

A set $C \subseteq \mathbf R^n$ is *affine* if the line through any two distinct points in $C$.

$$
\begin{gather}
x_1, x_2 \in C, \theta \in \mathbf R
\implies \theta x_1 + (1-\theta) x_2 \in C
\end{gather}
$$

- A set is *affine* iff it contains every affine combination of its points. That is:

    If $C$ is an affine set, $x_1, \dots ,x_k \in C$, and $\theta_1 + \dots + \theta_k =1$, then

$$
\begin{gather}
\theta_1 x_1 + \dots + \theta_k x_k \in C
\end{gather}
$$
> [!important] Fact: An affine set can be expressed as a subspace plus an offset
>
> 
> If $C \subseteq \mathbf R^n$ is an affine set and $x_0 \in C$, then the set
> 
> $$
> \begin{gather}
> V=C-x_0 = \set{x-x_0 \mid x\in C} 
> \end{gather}
> $$
> is a *subspace* of $\mathbf R^n$
> 
> Likewise, the affine set $C$ can be expressed as a subspace plus an offset as
> $$
> C=V + x_0 = \set{v + x_0 \mid v \in V}
> $$
> 
> > [!seealso]+ Proof
> > 
> > Give $v_1, v_2$ in $V$, we have
> > 
> > $$
> > \begin{gather}
> > \alpha (v_1 + x_0) + \beta(v_2 + x_0) + (1-\alpha - \beta) x_0 \in C
> > \end{gather},
> > $$
> > since $(v_1 + x_0), (v_2 + x_0) \in C$.
> > 
> > Then
> > 
> > $$
> > \begin{gather}
> > \alpha (v_1 + x_0) + \beta(v_2 + x_0) + (1-\alpha - \beta) x_0 -x_0 
> > \\\\
> > = \alpha v_1 + \beta v_2 \in V
> > \end{gather}
> > $$
> 

#### Dimension of affine sets
 $\dim C \triangleq \dim V$, where $V=C-x_0$ and $x_0 \in C$

#### Properties about solution set of linear equations
The solution set of a system of linear equations is an affine set
$$A(\theta x_1 + (1-\theta) x_2) =b$$
The subspace associated with the affine set $C$ is the nullspace of $A$
$$A(x - x_0) = b - b =0$$
Conversely, every <span style="color: #EF5040">affine set can be expressed as the solution set of a system of linear equation</span>

### Affine Hull

The set of all affine combinations of points in some set $C \subseteq \mathbf R^n$ is called *affine hull* of $C$, denoted $\text{aff }C$

$$
\begin{gather}
\text{aff } C = \set{\sum\limits_i\theta_i x_i \mid x_i \in \mathbf R^n, \sum\limits_i\theta_i =1}
\end{gather}
$$
- The affine hull is the smallest affine set that contains $C$, that is
    - If $S$ is any affine set with $C \subseteq S$, then  $\text{aff } C \subseteq S$

#### Affine Dimension
The affine dimension of $C \subseteq \mathbf R^n$, is defined as the dimension of its affine hull.

#### Interior

An element $x \in C \subseteq \mathbf R^n$ is called *interior point* of $C$ if there exists an $\epsilon > 0$ for which

$$
\begin{gather}
\set {y \mid \lVert y-x \rVert  \le \epsilon}
\end{gather}
$$
is a subset of $C$

> [!tip] Translation
> An element $x \in C \subseteq \mathbf R^n$ is called *interior point* of $C$ if there exists a *norm ball* with $x$ as centre is a subset of $C$


#### Relative Interior

The relative interior of the set $C$, denoted $\text{relint } C$, is defined as its *interior* relative to $\text{aff }C$:

$$
\begin{gather}
\text{relint } C = \set {x \in C \mid (B(x, r) \cap \text{aff } C) \subseteq C, \text{for some } r > 0}
\end{gather}
$$

where $B(x, r)$ is the norm ball with $x$ as centre, and $r$ as radius.

$$
\begin{align}
C&=\set{x \in \mathbf R^3 \mid x_1^2 + x_2^2 \le 1, x_3=0}
\\\\
\text{aff } C &= \set{x\in \mathbf R^3 \mid  x_3 = 0}
\\\\
\text{int } C &= \emptyset
\\\\
\text{relint } C &= \set{x \in \mathbf R^3 \mid x_1^2 + x_2^2 < 1, x_3=0}
\end{align}
$$

### Affinely Independent

The $k+1$ points $v_0, v_1,\dots, v_k \in \mathbf R^n$ are called *affinely independent* if $\set{v_1 -v_0, \dots, v_k - v_0}$ is linearly independent.

---

## Convex Sets

### Convex Sets

A set is *convex* if the line segment between any two points in $C$ lies in $C$. That is, for any $x_1, \dots, x_k \in C$, $\theta_1, \dots, \theta_k \ge 0$, and $\theta_1 + \dots + \theta_k = 1$, we have

$$
\begin{gather}
\theta_1 x_1 + \dots + \theta_k x_k \in C
\end{gather}
$$


- Every <span style="color: #EF5040">affine set</span> is convex
- Every <span style="color: #EF5040">line segment</span> is convex
- A set is convex iff it contains every convex combination of its points

### Convex Hull

The *convex hull* of a set $C$, is the set of all convex combinations of points in $C$:
$$
\begin{gather}
\text{conv } C = \set{\sum\limits_i{\theta_i x_i} \mid x_i \in C, \theta_i \ge 0, \sum\limits_i \theta_i = 1}
\end{gather}
$$
- The convex hull $\text{conv } C$ is always convex. It is the smallest convex set that contains $C$.

### Convex Combination
 
 Lets $x_1, x_2, \dots, x_k \in \mathbf R^n$. Then, a point of the form
 
 $$
 \begin{gather}
 \theta_1 x_1 + \dots + \theta_k x_k
 \\\\
 \text{with } \theta_1 +\dots + \theta_k = 1
 \\\\
 \text{and } \theta_1, \dots, \theta_k \ge 0
 \end{gather}
 $$
 is referred to as an *affine combination* of the points $x_1, x_2, \dots, x_k$.

#### Integral definitions

Let $C$ be a convex set. Consider a function $p: \mathbf R^n \to \mathbf R$ that satisfies $p(x)\ge 0, \forall x \in C$ and $\int_C p(x) x = 1$. Then

$$
\begin{gather}
\int_C p(x) x dx \in C
\end{gather}
$$

#### Probability distributions (most general form)

Similar to the [Integral definitions](#Integral%20definitions),

$$
\begin{gather}
\mathbf E[x] \in C
\end{gather}
$$

## Cones

### Cones
A set is called a *cone* if for every $x \in C$ and $\theta \ge 0$ we have $\theta x \in C$. The set is also said to be *nonnegative homogeneous*.

- A convex cones minus its interior is a cone but not convex

### Convex Cones

A set $C$ is called a convex cone if it is a convex and a cone. That is, for any $x_1, x_2 \in C$, $\theta_1, \theta_2 \ge 0$ we have

$$
\begin{gather}
\theta_1 x_1 + \theta_2 x_2 \in C
\end{gather}
$$
Note that, we don't need $\theta_1 + \theta_2 =1$

### Conic Combination

A point of the form $\theta_1 x_1 + \dots + \theta_k x_k$ with $\theta_i \ge 0$ is called a *conic combination* (or a *nonnegative linear combination*) of $x_1, \dots, x_k$.

- A set $C$ is a convex cone iff it contains all conic combinations of its elements

### Conic Hull


$$
\begin{gather}
\set{\sum\limits_i\theta_i x_i \mid x_i \in C, \theta_i \ge 0}
\end{gather}
$$

- The conic hull of a set $C$ is the smallest <span style="color: #EF5040">convex cone</span> contains $C$.

## Examples of Convex & Affine Sets

- $\emptyset$
    - affine, convex
- $\set {x_0}$ 
    - affine, convex
- $\mathbf R^n$
    - affine, convex
- subspace
    - affine, convex
- line
    - affine, convex
    - convex cone if passing through zero
- line segment
    - convex
    - not affine unless it reduces to a point
- ray $\set{x_0 + \theta v \mid v \ne 0, \theta \ge 0}$
    - convex
    - convex cone if $x_0 = 0$


### Hyperplane

A hyperplane is a set of the form

$$
\begin{gather}
\set {x\mid a^T x = b}
\end{gather}
$$

where $a\in \mathbf R^n$, $a\ne \mathbf 0$, and $b \in R$

- A hyperplane is the solution set of a nontrivial linear equation among components of $x$. Thus, <span style="color: #EF5040">a hyperplane is affine</span>.
- The hyperplane can be further written as
$$
\begin{gather}
\set{x\mid a^T(x-x_0) = 0} = x_0 + \set{a}^\bot
\end{gather}
$$
where $\set a^\bot$ denotes the *orthogonal complement* of $\set a$, i.e. $\set{a}^\bot = \set {v \mid a^T v = 0}$


### Halfspaces



A hyperplane divides $\mathbf R^n$ into two *halfspaces*.

A closed halfspace is a set of the form 

$$
\begin{gather}
\set {x \mid a^T x \le b}
\end{gather}
$$
- A halfspace is the solution set of one nontrivial linear inequality.
- Halfspaces are convex, but not affine
- Halfspace can also be rewritten as

$$
\begin{gather}
\set {x \mid a^T (x - x_0)\le 0}
\end{gather}
$$
where $x_0$ is a point on the associated hyperplane.

- The boundary of a halfspace is the associated hyperplane.
- The interior of a (closed) halfspace is called an *open halfspace*.
$$
\begin{gather}
\set{x \mid a^T x < b}
\end{gather}
$$

### Euclidean Balls

A *Euclidean ball* (or just *ball*) in $\mathbf R^n$ has the form

$$
\begin{gather}
B(x_c, r) = \set {x \mid \lVert x -x_c \rVert_2 \le r} = \set{x \mid (x-x_c)^T(x-x_c) \le r^2}
\\\\
= \set {x_c + ru \mid u \in \mathbf R^n, \lVert u \lVert_2 \le 1}
\end{gather}
$$

where $r > 0$

### Ellipsoid

An ellipsoid has the form

$$
\begin{gather}
\mathcal E = \set {(x-x_c)^T P^{-1}(x-x_c) \le 1}
\\\\
=\set {x_c + Au \mid u \in \mathbf R^n, \Vert u \Vert_2 \le 1}
\end{gather}
$$
where $P \in \mathbf S_{++}$, $A = P^{1/2}$


- The matrix $P$ determines how far the ellipsoid extends in every direction from $x_c$
    - The lengths of the semi-axes of $\mathcal E$ are given by $\sqrt{\lambda_i}$ where $\lambda_i$ are the eigenvalues of $P$.
- A *ball* is a special case of ellipsoid with $P=r^2 I$
- An ellipsoid is convex
- If $A$ is symmetric positive semidefinite but singular, then the set is called a *degenerate ellipsoid*
- The affine dimension is $\text{rank } A$

### Norm Ball

$$
\begin{gather}
C = \set{x \mid \Vert x-x_c\Vert \le r}
\end{gather}
$$
- Norm ball is convex

### Norm Cone

$$
\begin{gather}
C = \set {(\mathbf x, t) \mid \Vert \mathbf x \Vert \le t} \subseteq \mathbf R^{n+1}
\end{gather}
$$

- Norm cone is also convex

#### Second-Order Cone

The second-order cone is the norm cone with the Euclidean norm

$$
\begin{align}
C
&= \set{(\mathbf x, t) \in \mathbf R^{n+1}\mid \Vert x \Vert_2 \le t}
\\\\
&= \left\{
\begin{bmatrix}
\mathbf x \\ t
\end{bmatrix}
\middle\vert
\begin{bmatrix}
\mathbf x \\ t
\end{bmatrix}^T
\begin{bmatrix}
\mathbf I & 0 \\
0 & -1
\end{bmatrix}
\begin{bmatrix}
\mathbf x \\ t
\end{bmatrix}
\right\}
\end{align}
$$

- Aka quadratic cone, the Lorentz cone, or ice-cream cone

### Polyhedra

A polyhedron is defined as the solution set of finite number of <span style="color: #EF5040">linear equations</span> and <span style="color: #EF5040">linear inequalities</span>:

$$
\begin{align}
\mathcal P &= \set {x \mid a_i^T x \le b,\, c_j^T x= d_j}
\\\\
&= \set {x \mid Ax \preceq b, Cx=d}
\end{align}
$$

where the symbol $\preceq$ denotes *componentwise inequality* (or *vector inequality*)

- A polyhedron is the intersection of a finite number hyperplanes and halfspaces.
- Polyhedra are convex
- Affine sets (including subspaces, lines, and hyperplanes) are polyhedra
- Ray and line segments are polyhedra
- A [bounded](#Bounded) polyhedron is called a *polytope*
- The *nonnegative orthant*, $\mathbf R_+^n$, is a polyhedron and a <span style="color: #EF5040">cone</span> (called a *polyhedral cone*)
- A convex hull of a finite set is a polyhedron and bounded

#### Simplex

Suppose the $k+1$ points $v_0, v_1, \dots, v_k \in \mathbf R^n$ are [affinely independent](#Affinely%20Independent). The *simplex* determined by the convex hull of there $k+1$ points

$$
\begin{gather}
C = \text{conv }\set{v_0, \dots, v_k}
\end{gather}
$$
- This called $k$-dimensional simplex in $\mathbf R^n$
- A 1-d simplex is a line segment
- A 2-d simplex is a triangle
- A 3-d simplex is a tetrahedron
- A simplex can be expressed as polyhedron

$$
\begin{gather}
\mathbf 1^T A_1 x  \le \mathbf 1^T A_1 v_0 + 1
&
A_1 x \succeq A_1 v_0
&
A_2 x = A_2 v_0
\end{gather}
$$

> [!seealso]- Proof
> 
> To describe the simplex $C$ as a polyhedron, first let
> 
> $$
> \begin{gather}
> B = 
> \begin{bmatrix}
> v_1 - v_0 & \cdots & v_k - v_0
> \end{bmatrix}
> \in \mathbf R^{n\times k}
> \\\\
> y = 
> \begin{bmatrix}
> \theta_1 & \cdots & \theta_k
> \end{bmatrix}^T
> \end{gather}
> $$
> By the definition of simplex, we can say $x \in C$ iff
> 
> $$
> \begin{gather}
> x = v_0 + By
> \end{gather}
> $$
> 
> The matrix $B$ has full rank $k$ since $v_i$ are affinely independent. Thus we can find a nonsingular matrix $A=(A_1, A_2) \in \mathbf R^{n\times  n}$ such that
> 
> $$
> \begin{gather}
> AB = 
> \begin{bmatrix}
> A_1 \\ A_2
> \end{bmatrix}
> B
> =
> \begin{bmatrix}
> I_k \\ 0
> \end{bmatrix}
> \end{gather}
> $$
> Multiplying $x =v_0 + By$ on the left with $A$, we obtain
> 
> $$
> \begin{gather}
> A_1 x = A_1 v_0 + y
> &
> A_2 x = A_2 v_0
> \end{gather}
> $$
> 
> Since $y \succeq 0$ and $\mathbf 1^T y \le 1$, then
> 
> $$
> \begin{gather}
> \mathbf 1^T A_1 x  \le \mathbf 1^T A_1 v_0 + 1
> &
> A_1 x \succeq A_1 v_0
> &
> A_2 x = A_2 v_0
> \end{gather}
> $$
> 
#### Unit Simplex

The unit simplex in $\mathbf R^n$ is the <span style="color: #EF5040">$n$-dimensional simplex</span>

$$
\begin{gather}
C = \text{conv }\set {0, e_1, \dots, e_n} = \set{x \mid x \succeq 0, \mathbf 1^T x \le 1}
\end{gather}
$$

#### Probability Simplex

The <span style="color: #EF5040">probability simplex</span> in $\mathbf R^n$ is the $(n-1)$-dimensional simplex as

$$
\begin{gather}
\set {x \mid x \succeq 0, \mathbf 1^T x = 1}
\end{gather}
$$

- Vectors in the probability simplex correspond to probability distribution on a set with $n$ elements

### The Positive Semidefinite Cone

The set $\mathbf S^n_+$ is a [convex cones](#Convex%20Cones).

By the definition of positive semidefinite:

$$
\begin{gather}
x^T (\theta_1 A + \theta_2 B) x = \theta_1 x^T A x + \theta_2 x^T B x \ge 0
\end{gather}
$$
It can be easily show:

if $\theta_1, \theta_2 \ge 0$ and $A, B \in \mathbf S^n_+$, then $\theta_1 A + \theta_2 B \in \mathbf S^n_+$

---

## Operations That Preserve Convexity

### Intersection Preserves Convexity

If $S_1$ and $S_2$ are convex, then $S_1 \cap S_2$ is convex.

Likewise, if $S_\alpha$ are convex, then

$$
\begin{gather}
\bigcap_{\alpha \in \mathcal A} S_\alpha
\end{gather}
$$
is also convex. Here $\mathcal A$ can be finite and infinite set of indices.

- E.g. A polyhedron is a intersection of some hyperplanes and halfspaces. Since both of them are convex, the polyhedron is also convex.
- E.g. A positive semidefinite cone $\mathbf S^n_+$ can be express as the intersection of infinite linear functions (halfspaces). Therefore, it is also a convex.
    - $z^T X z$ is a linear function of $X$

$$
\begin{gather}
\mathbf S_+^n = \bigcap_{z\ne 0}\set{X \in \mathbf S^n \mid z^T X z \ge 0}
\end{gather}
$$
- Conversely, every closed convex set $S$ is the intersection of (usually infinite) halfspaces.

$$
\begin{gather}
S = \bigcap_{S\subseteq \mathcal H \subseteq \mathbf R^n} \mathcal H
\end{gather}
$$

### Affine Functions Preserve Convexity

> [!note] Affine Functions
> 
> A function $f: \mathbf R^n \to \mathbf R^m$ is *affine* if it is a sum of a *linear function* and a *constant*. That is, it has the form
> 
> $$
> \begin{gather}
> f(x) = Ax + b
> \end{gather}
> $$
> 
> where $A\in \mathbf R^{m\times n}$ and $b \in \mathbf R^m$.


Suppose $S \subseteq \mathbf R^n$ is convex and $f: \mathbf R^n \to \mathbf R^m$ is an affine function. Then the *image* of $S$ under $f$,

$$
\begin{gather}
f(S) = \set{f(x) \mid x\in S},
\end{gather}
$$
is also convex.

- Inverse image under affine functions $f$ is also convex
- Cartesian product of two sets
    - Suppose $S_1 \subseteq \mathbf R^m$, $S_2 \subseteq \mathbf R^n$, then the $S_1 \times S_2$ is convex
- Sum of two set
    - Suppose $S_1, S_2 \subseteq \mathbf R^n$
    - $S_1 + S_2 = \set{x + y \mid x \in S_1, y \in S_2}$ is convex
- Partial sum of two sets
    - Suppose $S_1, S_2 \subseteq \mathbf R^n \times \mathbf R^m$
    - $\set{(x, y_1 + y_2) \mid (x, y_1) \in S_1, (x, y_2) \in S_2}$ is convex
    - Partial sums are general cases for <span style="color: #EF5040">set intersection</span>($m=0$) and <span style="color: #EF5040">set addition</span> ($n=0$)

#### Examples - Polyhedra

The polyhedron $\set{x \mid Ax \preceq b}$ can be expressed as the inverse image of the nonnegative orthant under affine function $f(x) = b- Ax$

$$
\begin{gather}
\set{x \mid Ax \preceq b} = \set{f(x) | x\in \mathbf R_+^m}
\end{gather}
$$

The more general polyhedron $\set{x \mid Ax \preceq b, Cx=d}$ can be expressed as the inverse image of the Cartesian product of the nonnegative orthant and the origin under the affine function $f(x) = (b-Ax, d-Cx)$


$$
\begin{gather}
\set{x \mid Ax \preceq b, Cx=d} = \set{f(x) \mid x\in \mathbf R_+^m \times \set{0}}
\end{gather}
$$

#### Examples - Ellipsoid

The ellipsoid

$$
\begin{gather}
\mathcal E = \set {(x-x_c)^T P^{-1}(x-x_c) \le 1}
\end{gather}
$$
where $P \in \mathbf S^n_{++}$, is the image of the *unit Euclidean ball* under the affine mapping $f(u) = P^{1/2}u + x_c$.

It's also the inverse image of unit Euclidean ball under the affine mapping $g(x) = P^{-1/2}(x-x_c)$.

### Perspective Functions Preserve Convexity

The perspective function $P: \mathbf R^{n+1} \to \mathbf R^n$, with domain $\text{dom } P = \mathbf R^n \times \mathbf R_{++}$, is defined as $P(z, t) = z/t$

The image under the perspective function $P: \mathbf R^{n+1} \to \mathbf R^n$ is also convex.

> [!seealso]- proof
> 
> Suppose $x=(x_{:n}, x_{n+1}), y=(y_{:n}, y_{n+1}) \in \mathbf R^{n+1}$, with $x_{n+1}, y_{n+1} > 0$, which are the two points from a convex set $C$, then
> 
> $$
> \begin{gather}
> P(\theta x + (1-\theta) y) = \frac{\theta x_{:n} + (1-\theta)y_{:n}}{\theta x_{n+1} +(1-\theta) y_{n+1}} =
> \mu P(x) + (1-\mu) P(y)
> \\\\
> \mu=\frac{\theta x_{n+1}}{\theta x_{n+1} +(1-\theta) y_{n+1}} \in [0, 1]
> \end{gather}
> $$
> 
> Here $\theta$ and $\mu$ is monotonic. Therefore $[P(x), P(y)]$ is the image of $[x, y]$ under $P$, making the line segment $[P(x), P(y)]$ in $P(C)$.
> 

Conversely, the inverse image of a convex under the perspective function is also convex.

> [!seealso]- proof
> $C\subseteq \mathbf R^n$ is convex, then to show
> 
> $$
> \begin{gather}
> P^{-1}(C) = \set{(x, t) \mid x/t \in C, t>0}
> \end{gather}
> $$
>
> is also convex, we first take $x/t$, and $y/s$ from $C$.
> Then we need to show
> 
> $$
> \begin{gather}
> \theta(x, t) + (1-\theta)(y, s) \in P^{-1}(C)
> \end{gather}
> $$
> i.e.
> 
> $$
> \begin{gather}
> \frac{\theta x + (1-\theta)y}{\theta t + (1-\theta)s} \in C
> \end{gather}
> $$
> 
> Then we can modify the above expression as
>
> $$
> \begin{gather}
> \frac{\theta x + (1-\theta)y}{\theta t + (1-\theta)s}
> =
> \mu \frac{x}{t} + (1-\mu) \frac{y}{s}
> \\\\
> \mu = \frac{\theta t}{\theta t + (1-\theta) s} \in [0, 1]
> \end{gather}
> $$
>

### Linear-fractional Functions Preserve Convexity 

- A *linear-fractional* function is formed by composing the perspective function with an affine function.

Let $g: \mathbf R^n \to \mathbf R^{m+1}$ be affine:

$$
\begin{gather}
g(x) = 
\begin{bmatrix}
A \\ c^T
\end{bmatrix}
x+
\begin{bmatrix}
b \\ d
\end{bmatrix}
\end{gather}
$$

where $A\in \mathbf R^{m\times n}, b \in \mathbf R^m, c \in \mathbf R^n, d \in \mathbf R$.

The function $f = P \circ g$, i.e.

$$
\begin{gather}
f(x) = \frac{Ax + b}{c^Tx + d}, 
\qquad
\text{dom } f = \set{x \mid c^T x + d > 0}
\end{gather}
$$
is called *linear-fractional* (or *projective*) function.

- Affine functions and linear functions are special cases of linear-fractional functions.

---



## Misc.

### Bounded

A subset $C$ of $\mathbf R^n$ is called *bounded* if there exists $B > 0$ such that any $x \in C$ satisfies $|x_i| \le B$ for any $i \in \set{1, 2, \dots, n}$

That is, all points in the set are within a certain distance of each other.
