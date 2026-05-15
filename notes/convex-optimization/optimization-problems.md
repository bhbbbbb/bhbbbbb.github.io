---
title: Optimization Problems
tags:
- Convex Optimization
- Cones
- Duality
- Convex Sets
nav_visibility: normal
created: '2024-04-07'
last_modified: '2024-05-05'
lang: en
category: knowledge:textbook
---


## Optimization Problems


- *Standard form*, i.e., the righthand side of the inequality and equality constraints are zeros
$$
\begin{gather}
\text{minimize } & f_0(x)
\\
\text{subject to } & f_i(x) \le 0, & i = 1, \dots, m
\\
& h_i(x) = 0, & i = 1, \dots, p
\end{gather}
$$

is used to describe an optimization problem of finding an $x$ that minimizes $f_0(x)$ among all $x$ that satisfy the conditions.

- $x\in \mathbf R^n$: the *optimization variables*
- $f_0: \mathbf R^n \to \mathbf R$: the *objective function*
- $f_i: \mathbf R^n \to \mathbf R$: the *inequality constraint function*
- $h_i: \mathbf R^n \to \mathbf R$: the *equality constraint function*

- The set $$\mathcal D = \bigcap_{i=0}^m \text{dom }f_i \cap \bigcap_{i=1}^p\text{dom }h_i$$ is called the *domain* of the problem
- A point $x \in \mathcal D$ is *feasible* if it satisfies all constraints
- The problem is called *feasible* if there exists $x \in \mathcal D$ that is feasible; the problem is called *infeasible* if there is on feasible point in $\mathcal D$
    - A feasible problem is also called *solvable*
- The set of feasible points is called the *feasible set*
- If there are no constraints (i.e. $m=p=0$), then the feasible set equals $\mathcal D = \text{dom } f_0$, and the problem is called *unconstrained*.

- The *optimal value* $p^*$ is defined as $$ \begin{gather} p^* = \inf \set{f_0 (x) \mid f_i(x) \le 0, h_j(x) = 0, i=1\dots m, j=1\dots p} \end{gather} $$
- $p^* = \infty$ if the problem is infeasible
- $p^* = -\infty$ if problem is *unbounded below*
    - $X_{opt}$ is then empty
- $x^*$ is an *optimal point* if $x^*$ is feasible, and $f_0(x^*) = p^*$
- The set of all optimal points is the *optimal set*, denoted $$X_{opt} = \set{x \mid f_0(x) = p^*, \text{constraints staistifed}}$$
- If $X_{opt}$ is empty, we say the optimal value is not attained or not achieved
    - <span style="color: #EF5040">Always occurs when the problem is unbounded below</span>
    - We say the optimal value is *attained* or *achieved* if there is an optimal point for the problem
    - Sometime, the problem may be not attained even if the problem is feasible
- A feasible point $x$ with $f_0(x) \le p^* + \epsilon$ (where $\epsilon > 0$) is called *$\epsilon$-suboptimal*
    - The set of all $\epsilon$-suboptimal points is called the $\epsilon$-suboptimal set for the optimization problem

- We say a feasible point is *locally optimal* if there exists an $R > 0$ such that $$f_0(x) = \inf\set{f_0(z) \mid \text{constraints}, \Vert z- x \Vert_2 \le R}$$
    - That is, $x$ minimizes $f_0$ over nearby points in the feasible set
- If $x$ is feasible and $f_i (x) = 0$, we say the $i$th inequality constraint $f_i(x) < 0$, we say the constraint $f_i(x) \le 0$ is *active*
- If $f_i(x) < 0$, we say the constraint $f_i(x) \le 0$ is *inactive*
- We say that a constraint is *redundant* if deleting it does not change the feasible se

### Examples

Considering unconstrained problems as examples, with $f_0: \mathbf R \to \mathbf R$ and $\text{dom } f_0 = \mathbf R_{++}$.

$$
\begin{gather}
p^* = \inf \set{f_0 (x) \mid x \text{ is feasible}}
\end{gather}
$$

- $f_0(x) = 1/x: p^* = 0$, but the optimal value is not achieved
- $f_0(x)=-\log x: p^* = -\infty$, so this problem is unbounded below.
- $f_0(x) = x\log x: p^* = -1/e$, achieved at the (unique) optimal point $x^* = 1/e$

### Feasibility Problems


$$
\begin{gather}
\text{minimize } & f_0(x) = 0
\\
\text{subject to } & f_i(x) \le 0, & i = 1, \dots, m
\\
& h_i(x) = 0, & i = 1, \dots, p
\end{gather}
$$


- If the objective function is identically zero, the optimal value is either
    - $0$, if the feasible set is nonempty, or
    - $\infty$, if the feasible set is empty

### Equivalent Problems

We call two problems *equivalent* (informally) if from a solution of one, a solution of the other is readily found, and vice versa.


#### Change of Variables

Suppose $\phi: \mathbf R^n \to \mathbf R^n$ is one-to-one, with image covering the problem domain $\mathcal D$, i.e., $\mathcal D \subseteq \phi(\text{dom } \phi)$


$$
\begin{gather}
\text{minimize } & \tilde f_0(z)
\\
\text{subject to } & \tilde f_i(z) \le 0, & i = 1, \dots, m
\\
& \tilde h_i(z) = 0, & i = 1, \dots, p
\end{gather}
$$


with variable $z$, where we define functions $\tilde f_i(z) = f_i(\phi(z))$, and $\tilde h_i(z) = h_i(\phi(z))$

Then we say this problem is equivalent and related by the change of variable or substitution of variable $x = \phi(z)$ (and $z = \phi^{-1}(x)$)

#### Transform of Objective and Constraint Functions

Suppose that
- $\phi_0: \mathbf R \to \mathbf R$ is monotone increasing
- $\phi_1, \dots, \phi_m: \mathbf R \to \mathbf R$ satisfy $\phi_i(u) \le 0$ iff $u \le 0$
- $\phi_{m+1}, \dots, \phi_{m+p}: \mathbf R \to \mathbf R$ satisfy $\phi_i(u) = 0$ iff $u = 0$

We define
- $\tilde f_i(x) = \phi_i(f_i(x))$
- $\tilde h_i(x) = \phi_{m+i}(h_i(x))$

#### Slack Variables

- Observation: $f_i(x) \le 0$ iff there is an $s_i \ge 0$ that satisfies $f_i(x) + s_i = 0$.
- The introduced $s_i$ is called the *slack variable* associated with the original inequality constraint $f_i(x) \le 0$


$$
\begin{gather}
\text{minimize } & f_0(x)
\\
\text{subject to }
& s_i \ge 0, & i = 1, \dots, m
\\
& f_i(x) + s_i = 0, & i = 1, \dots, m
\\
& h_i(x) = 0, & i = 1, \dots, p
\end{gather}
$$


This problem has
- $n+m$ variables ($x, s$)
- $m$ inequality constraints (the nonnegative constraints on $s_i$)
- $m+p$ equality constraints

#### Eliminating Equality Constraints

- Observation: Put equality constraints to the domain

Suppose the function $\phi: \mathbf R^k \to \mathbf R^n$ is such that $x$ satisfies $h_i(x) = 0$ iff there is some $z \in \mathbf R^k$ such that $x= \phi(z)$


$$
\begin{gather}
\text{minimize } & \tilde f_0(z) = f_0(\phi(z))
\\
\text{subject to } & \tilde f_i(z)  = f_i(\phi(z)) \le 0, & i = 1, \dots, m
\end{gather}
$$


#### Eliminating Linear Equality Constraints

Consider the standard form problem with linear equality constraints


$$
\begin{gather}
\text{minimize } & f_0(x)
\\
\text{subject to } & f_i(x) \le 0, & i = 1, \dots, m
\\
& Ax = b
\end{gather}
$$

Suppose $Ax = b$ is consistent. Then the solution set of $Ax = b$ can be parametrized as $\set{Fz + x_0 \mid z \in \mathbf R^k}$ where $F \in \mathbf R^{n\times k}$ is chosen to be any full rank matrix with $\mathcal R(F) = \mathcal N(A)$ (i.e., $k = n -\text{rank } A$), and $x_0$ is any particular solution of $Ax = b$


$$
\begin{gather}
\text{minimize } & f_0(F z + x_0)
\\
\text{subject to } & f_i(F z + x_0) \le 0, & i = 1, \dots, m
\end{gather}
$$

#### Introducing Equality Constraints

Consider the example problem

$$
\begin{gather}
\text{minimize } & f_0(A_0 x + b_0)
\\
\text{subject to } & f_i(A_i x + b_i) \le 0, & i = 1, \dots, m
\\
& h_i(x) = 0, & i = 1, \dots, p
\end{gather}
$$

where $A_i \in \mathbf R^{k_i \times n}$, and $f_i: \mathbf R^{k_i} \to \mathbf R$.

We introduce
- new variable $y_i \in \mathbf R^{k_i}$
- new equality $y_i = A_i x + b_i, \qquad i=0, \dots, m$
Then form the equivalent problem

$$
\begin{gather}
\text{minimize } & f_0(y_0)
\\
\text{subject to }
& f_i(y_i) \le 0, & i = 1, \dots, m
\\
& y_i = A_i x + b_i,  & i = 1, \dots, m
\\
& h_i(x) = 0, & i = 1, \dots, p
\end{gather}
$$

This problem has

- $k_0 + \dots + k_m$ new variables ($y_i$)
- $k_0 + \dots + k_m$ new equality constraints ($y_i = A_i x + b_i$)

- The objective and inequality constraints in this problem are independent, i.e., involve different optimization variables.

#### Optimizing over Some Variables

- Key: we can always minimize a function by first minimizing over some of the variables, and then minimizing over the remaining ones.

$$
\begin{gather}
\inf_{x, y}\set{f(x, y)} = \inf_x \tilde f(x)
\end{gather}
$$

where $\tilde f(x) = \inf_y f(x, y)$

- Example
     - Consider a problem with strictly convex quadratic objective, with some of the variable unconstrained:

$$
\begin{gather}
 \text{minimize } & x_1^T P_{11}x_1 + 2 x_1^T P_{12} x_2 + x_2^T P_{22}x_2 \\
 \text{subject to } & f_i(x_1) \le 0
\end{gather}
$$

where $P_{11}$ and $P_{22}$ are symmetric.

Here we can analytically minimize over $x_2$:

$$
\begin{gather}
\inf_{x_2} (x_1^T P_{11}x_1 + 2 x_1^T P_{12} x_2 + x_2^T P_{22}x_2)
\\
= x_1^T ( P_{11} - P_{12}P_{22}^{-1}P_{12}^T) x_1
\end{gather}
$$

Therefore, the original problem is equivalent to 

$$
\begin{gather}
\text{minimize } & x_1^T ( P_{11} - P_{12}P_{22}^{-1}P_{12}^T) x_1
\\
\text{subject to } & f_i(x_1) \le 0
\end{gather}
$$

### Epigraph Problem Form


$$
\begin{gather}
\text{minimize } & t
\\
\text{subject to }
& f_0(x) - t \le 0
\\
& f_i(x) \le 0, & i = 1, \dots, m
\\
& h_i(x) = 0, & i = 1, \dots, p
\end{gather}
$$

with variables $x \in \mathbf R^n$ and $t \in \mathbf R$.

- It is equivalent to the original problem: $(x, t)$ is optimal for the epigraph form problem iff $x$ is optimal for the original problem and $t= f_0(x)$
- The epigraph form problem can be interpreted geometrically as an optimization problem in the "graph space" $(x, t)$.

## Convex Optimization

$$
\begin{gather}
\text{minimize } & f_0(x)
\\
\text{subject to } & f_i(x) \le 0, & i = 1, \dots, m
\\
& a_i^T x = b_i, & i = 1, \dots, p
\end{gather}
$$

where $f_0, \dots, f_m$ are convex functions.

Three additional requirements:
- $f_0$ must be convex
- $f_i$ must be convex
- $h_i(x) = a_i^T x - b_i$ must be affine

- The feasible set of a convex optimization problem is convex
    - The domain of the problem $$\mathcal D = \bigcap_{i=0}^m \text{dom } f_i$$ is a convex set (intersection of $m$ convex $0$-sublevel sets)
- In a convex optimization problem, we minimize a convex objective function over a convex set
- If $f_0$ is quasiconvex instead of convex, we say the problem is a *quasiconvex optimization problem*


### Local and Global Optima

- As an important property of convex optimization problems, any locally optimal point is also (globally) optimal.

> [!note]- Proof
> Suppose $x$ is locally optimal for a convex optimization problem, i.e., $x$ is feasible and
> 
> $$
> \begin{gather}
> f_0(x)= \inf\set{f_0(z) \mid z \text{ feasible}, \Vert z - x \Vert_2 \le R}
> \end{gather}
> $$
> 
> for some $R > 0$.
> 
> Now suppose there is a feasible $y$ that is global optimal $f_0(y) < f_0(x)$, this implies $\Vert y-x \Vert_2 > R$
> 
> 
> Consider the point $z$ (in the local region) given by
> 
> $$
> \begin{gather}
> z = (1-\theta) x + \theta y
> \\\\
> \theta = \frac{R/2}{\Vert x - y\Vert_2}
> \end{gather}
> $$
> 
> then $\Vert x - z \Vert_2 = R/2 < R$ ($z$ is feasible by convexity of the feasible set)
> 
> Now by definition of convex function
> 
> $$
> \begin{gather}
> f(z) = f_0((1-\theta) x + \theta y) \le (1-\theta)f_0(x) + \theta f_0(y) < f(x)
> \end{gather}
> $$
> 
> This leads to contradictions, for $f_0(z) \ge f(x)$ by assumption

---

## Linear Optimization Problems

When the objective and constraint functions are all affine, the problem is called a *linear program (LP)*. A general linear program has the form

$$
\begin{gather}
\text{minimize } & c^T x + d
\\
\text{subject to } & G x \preceq h
\\
& Ax = b
\end{gather}
$$

where $G \in \mathbf R^{m\times n}$ and $A \in \mathbf R^{p \times n}$

- LPs are a special case of convex optimization problems
- It is common to omit the constant $d$ in the objective
- The feasible set of an LP is a [polyhedron](Convex%20Sets.md#Polyhedra) $\mathcal P$; the problem is to minimize the objective over $\mathcal P$.

### Standard-Form LP

$$
\begin{gather}
\text{minimize } & c^T x
\\
\text{subject to } & Ax = b
\\
& x \succeq 0
\end{gather}
$$

- To transform from general form to a standard form, first introduce slack variables $s_i$

$$
\begin{gather}
\text{minimize } & c^T x + d
\\
\text{subject to } & Gx + s = h
\\
& Ax = b
\\
& s \succeq 0
\end{gather}
$$

- The second step is to express the variable $x$ as $x=x^+ - x^-$, where $x^+, x^- \succeq 0$

$$
\begin{gather}
\text{minimize } & c^T x^+ - c^T x^- + d
\\
\text{subject to } & Gx^+ - Gx^- + s = h
\\
& Ax^+ - A x^- = b
\\
& s \succeq 0, x^+ \succeq 0, x^- \succeq 0
\end{gather}
$$


### Inequality-Form LP


$$
\begin{gather}
\text{minimize } & c^T x
\\
\text{subject to } & Ax \preceq b
\end{gather}
$$
### Piecewise-Linear Minimization

- Unconstrained problem of minimizing the piecewise-linear, convex function

$$f(x) = \max_{i=1, \dots, m} (a_i^T x + b_i)$$

- Can be transformed to an equivalent LP by first forming the epigraph problem

$$
\begin{gather}
\text{minimize } & t
\\
\text{subject to } & \max_{i=1, \dots, m} (a_i^T x + b_i) \le t
\end{gather}
$$

- Then, the inequality can be expressed as a set of $m$ separate inequalities:

$$
\begin{gather}
\text{minimize } & t
\\
\text{subject to } & a_i^T x + b_i \le t, & i=1, \dots, m
\end{gather}
$$

## Quadratic Program

The convex optimization problem is called a *quadratic program* (*QP*) if the objective function is <span style="color: #EF5040">convex quadratic</span>, and the constraint functions are affine, as expressed in the form

$$
\begin{gather}
\text{minimize} & \frac{1}{2} x^T P x + q^T x + r
\\
\text{subject to }
& Gx \preceq h
\\
& Ax = b
\end{gather}
$$

where $P\in \mathbf S^n_+, G\in \mathbf R^{m \times n}$, and $A \in \mathbf R^{p \times n}$

- In a QP, we minimize a convex quadratic function over a polyhedron
- QP includes LP as a special case, by taking $P = 0$



### QCQP

- Quadratically Constrained Quadratic Programs

- If the objective and inequality constraint functions are convex and quadratic, as in


$$
\begin{gather}
\text{minimize} & \frac{1}{2} x^T P_0 x + q_0^T x + r_0
\\
\text{subject to }
& \frac{1}{2} x^T P_i x + q_i^T x + r_i \le 0, & i=1, \dots, m
\\
& Ax = b
\end{gather}
$$

where $P_i \in \mathbf S^n_+, i = 0, 1, \dots, m$

- if $P_1, \dots, P_m \in \mathbf S^n_{+=}$, feasible region is intersection of $m$ ellipsoid and an affine set

- QCQP includes QPs as a special case, by taking $P_i = 0$, for $i = 1, \dots, m$. If $P_0 = 0$, it further reduces to LPs.


> [!note] QCQP as SOCP
> 
> - using epigraph form
> $$
> \begin{gather}
> \text{minimize}
> & t (=f^T\bar x)
> \\
> \text{subject to }
> & \frac{1}{2} \bar x^T \bar P_0 \bar x + \bar q_0^T \bar x + r_0 \le 0
> \\
> & \frac{1}{2} \bar x^T \bar P_i \bar x + \bar q_i^T \bar x + r_i \le 0, & i=1, \dots, m
> \\
> & Ax = b
> \end{gather}
> $$
> 
> where $f = [\mathbf 0^T, 1]^T$, $\bar x = [x^T, t]^T$, $\bar P_i = \begin{bmatrix}P & 0 \\ 0^T & 0\end{bmatrix}$, $\bar q_i = [q_i^T, 0]^T$, $\bar q_0 = [q_0^T, -1]^T$
> 


### SOCP

- Second-Order Cone Program

$$
\begin{gather}
\text{minimize }  & f^T x
\\
\text{subject to } & \Vert A_ix + b_i \Vert_2 \le c_i^T x + d_i, &i=1, \dots , m
\\
& Fx = g
\end{gather}
$$
where $x\in \mathbf R^n$ is the optimization variable, $A_i \in \mathbf R^{n_i\times n}$, $b_i \in \mathbf R^{n_i}$, $c_i, f \in \mathbf R$, $d_i \in \mathbf R$, $F \in \mathbf R^{p \times n}$, and $g \in \mathbf R^p$

- We call a constraint of  the form $$\Vert Ax + b \Vert_2 \le c^T x + d$$ a *second-order cone constraint*, since it is the same as requiring the affine function $(Ax + b, c^T x + d)$ to lie in the [second-order cone](Convex%20Sets.md#Second-Order%20Cone) in $\mathbf R^{k+1}$

- When $c_i = 0, i=1, \dots, m$, the SOCP is equivalent to a QCQP
- If $A_i = 0, i=1, \dots, m$, then the SOCP reduces to a general LP

### More General SOCP


$$
\begin{gather}
\text{minimize }  & f^T x
\\
\text{subject to } & P_i x + q_i \in K_i, & i=1, \dots, m
\\
& Fx = g
\end{gather}
$$
where $x\in \mathbf R^n$ is the optimization variable, 

$$
\begin{gather}
P_i = \begin{bmatrix} A_i \\ c_i^T \end{bmatrix} \in \mathbf R^{(n_i + 1) \times n}
\\
q_i = \begin{bmatrix} b_i \\ d_i \end{bmatrix} \in \mathbf R^{n_i + 1}
\end{gather}
$$

- If $K = \set{(y, t) \in \mathbf R^{n+1} \mid \Vert y \Vert_2 \le t}$, it leads to an SOCP
- If $K = \mathbf R^m_+$, then it reduces to an LP

## Conic Form Problems

- aka cone programs
- A linear objective and one inequality constraint function, which is affine (and thus $K$-convex)

$$
\begin{gather}
\text{minimize } & c^Tx
\\
\text{subject to } & Fx + g \preceq_K 0
\\
& Ax = b
\end{gather}
$$
- When $K = \mathbf R^n_+$, the conic form problem reduces to a LP
    - Conic form problem is a generalization of LP

### Standard Form

$$
\begin{gather}
\text{minimize } & c^T x
\\
\text{subject to } & x \succeq_K 0
\\
& Ax = b
\end{gather}
$$

### Inequality Form

$$
\begin{gather}
\text{minimize } & c^T x
\\
\text{subject to } & Fx + g \preceq_K 0
\end{gather}
$$

## Semidefinite Programing

- aka SDP
- When $K = \mathbf S^k_+$

$$
\begin{gather}
\text{minimize } & c^T x
\\
\text{subject to } & x_1 F_1 + \cdots + x_n F_n + G\preceq 0
\\
& Ax = b
\end{gather}
$$

where $G, F_1, \dots, F_n \in \mathbf S^k$, and $A \in \mathbf R^{p\times n}$.

- The inequality is called linear matrix inequality (LMI)
- If the matrices $G, F_1, \dots, F_n$ are all diagonal, then the LMI is equivalent to a set of $n$ linear inequalities, and the SDP reduces to a LP.

### Standard form

- $p$ linear equality, $1$ nonnegatively constraint on the variable

$$
\begin{gather}
\text{minimize } & \text{tr }(CX)
\\
\text{subject to } & \text{tr }(A_i X) = b_i, & i = 1,\dots, p
\\
& X\succeq 0
\end{gather}
$$
where $C, A_1, \dots, A_p \in \mathbf S^n$. ($\text{tr }(CX) = \sum\limits_{i,j=1}^n C_{ij} X_{ij}$)

### Inequality Form


$$
\begin{gather}
\text{minimize } & c^T x
\\
\text{subject to } & x_1 A_1 + \dots + x_n A_n \preceq B
\end{gather}
$$
with variable $x \in \mathbf R^n$, and parameters $B, A_1, \dots, A_n \in \mathbf S^k$, $c \in \mathbf R^n$.

From linear equality and inequality constraints, and LMI constraints



$$
\begin{gather}
\text{minimize } & c^T x
\\
\text{subject to } & F^{(i)}(x) = x_1 F_1^{(i)} + \dots + x_n F_n^{(i)} + G^{(i)} \preceq 0,\quad i=1,\dots, K
\\& Gx \preceq h,
\\& Ax=b
\end{gather}
$$

Can be transformed to an SDP, by forming a large block diagonal LMI from individual LMIs and linear inequalities:


$$
\begin{gather}
\text{minimize } & c^T x
\\
\text{subject to } & \text{diag}(\text{diag}(Gx-h), F^{(1)}(x), \dots, F^{(K)}(x))) \preceq 0,\quad i=1,\dots, K
\\& Ax=b
\end{gather}
$$
