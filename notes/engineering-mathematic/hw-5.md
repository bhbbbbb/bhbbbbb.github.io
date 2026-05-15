---
title: Homework 5
tags:
- Differential Equations
- Boundary Value Problems
- Sturm-Liouville
nav_visibility: normal
created: '2022-02-22'
last_modified: '2022-02-22'
lang: zh
category: solution:homework
---


<div style="page-break-after: always; visibility: hidden"></div>

## #1
$$
\begin{align}
&y_{tt}=16 y_{xx} + xt & \text{for} -\infty < x < \infty,\quad t > 0

\\\\
&f(x) = y(x, 0) = e^{-x}, \quad g(x) = y_{t}(x, 0) = x\sin(x) & \text{for } -\infty < x < \infty
\\\\
&c^{2} = 16 \implies \text{take } c = 4
\end{align}
$$

$$
\begin{align}
y(x, t) &= \frac{1}{2} \big[f(x-ct)+f(x+ct)\big]+\frac{1}{2c}\int_{x-ct}^{x+ct}{g(x)\ dx} + \frac{1}{2c}\iint_{\Delta}xt\ dx\ dt
\\\\
&= \frac{1}{2}[e^{-x+4t}+e^{-x-4t}] + \frac{1}{8}\int_{x-4t}^{x+4t}{x\sin{(x)dx}} +\frac{1}{2c}\iint_{\Delta}xt\ dx\ dt
\end{align}
$$

<br>

$$
\begin{align}
\int_{x-4t}^{x+4t}{x\sin{(x)dx}} &= \left[-x\cos{(x)}\right]_{x-4t}^{x+4t}-\int_{x-4t}^{x+4t}{-\cos(x) dx}
\\\\
&= \big[-(x+4t)\cos(x+4t) +(x-4t)\cos(x-4t)\big]+\left[\sin(x)\right]_{x-4t}^{x+4t}
\\\\
&= -(x+4t)\cos(x+4t) +(x-4t)\cos(x-4t) +\sin(x+4t)-\sin(x-4t)
\end{align}
$$

$$
\begin{align}
\iint_{\Delta}xt\ dx\ dt &= \int_{0}^{t_{o}}\int_{4t+x_{0}-4t_{0}}^{-4t+x_{0}-4t_{0}}{xt\ dx}\ dt
\\\\
&= \int_{0}^{t_{0}}{\frac{1}{2}t\left((-4t+x_{0}-4t_{0})^{2}-(4t+x_{0}-4t_{0})^{2}\right)dt}
\\\\
&= \int_{0}^{t_{o}} {\frac{1}{2}t(2x_{0}-8t_{0})(-8t)\ dt}
\\\\
&= -4(2x_{0}-8t_{0}) \bigg[\frac{t^{3}}{3}\bigg]_{0}^{t_{0}} =-\frac{8}{3}(x_{0}-4t_{0})t_{o}^{3}
\end{align}
$$

<br>

$$
\begin{align}
y(x, t) = &\frac{1}{2}[e^{-x+4t}+e^{-x-4t}]
\\\\
&-(x+4t)\cos(x+4t) +(x-4t)\cos(x-4t) +\sin(x+4t)-\sin(x-4t)
\\\\
&-\frac{8}{3}(x_{0}-4t_{0})t_{o}^{3}
\end{align}
$$

---

## #2

$$
\begin{align}
& U_{t} = 3 U_{xx} & \text{for } 0 < x <5,\ t > 0
\\\\
& U_{x}(5, t) + 4U(5, t) = 0, \quad U(0, t) = 0 & \text{for } t> 0 
\\\\
&U(x, 0) = f(x) & \text{for } 0\leq x \leq 5
\end{align}
$$

<br>

$$
\begin{align}
& 3X''+\lambda X=0 & \#eq1
\\\\
& T'+\lambda T =0 & \#eq2
\end{align}
$$

besides, we have

$$
\begin{gather}
X'(5)T + 4X(5)T = 0
\\\\
\implies X'(5)+4X(5) = 0
\end{gather}
$$

and

$$
\begin{gather}
U(0, t) = 0
\\\\
X(0)\ T(t) = 0
\\\\
\implies X(0) =0
\end{gather}
$$

### \#eq1

$$
\begin{gather}
3m^{2} +\lambda = 0
\\\\
m = \pm \sqrt{\frac{-\lambda}{3}}
\end{gather}
$$

- case $a^{2} = -\lambda / 3 > 0$

$$
\begin{gather}
X= c e^{ax}+de^{-ax}
\\\\
X' = a(ce^{ax}-de^{-ax})
\\\\
X(0) = c +d=0
\\\\
\implies c= -d
\end{gather}
$$
$$
\begin{align}
X'(5)+4X(5) &= 0
\\\\
a(ce^{5a}-de^{-5a}) + 4(ce^{5a}+de^{-5a}) &= 0
\end{align}
$$
$$
\begin{gather}
\implies c = d =0 
\end{gather}
$$
this case is trivial

- case $a^{2} = -\lambda / 3 = 0$

$$
\begin{gather}
X = cx+d
\\\\
X' = c
\\\\
X(0) = d = 0
\\\\
X'(5)+4X(5) = 0
\\\\
c+4(5c) =0
\\\\
c = d=0
\end{gather}
$$

therefore, $\lambda =0$ is not an eigenvalue.



- case $-a^{2} = -\lambda / 3  < 0$

$$
\begin{gather}
X = c\cos(ax)+d\sin(ax)
\\\\
X' = a(-c\sin(ax)+d\cos(ax))
\\\\
X(0) = c=0
\\\\
X'(5)+4X(5) = 0
\\\\
ad\cos(5a)+4d\sin(5a) = 0
\\\\
\tan(5a) = -\frac{ad}{4d} = -\frac{a}{4}

\end{gather}
$$

接著令 $\tan(5a) = -a/4$ 的第 $n$ 個解為 $A_{n}$
, then the eigenvalue are
$$
\begin{gather}
\lambda_{n} = 3A_{n}^{2}
\end{gather}
$$

and the corresponding eigenfunction is
$$
\begin{gather}
\sin(A_{n}x)
\end{gather}
$$

---

### \#eq2

$$
\begin{gather}
T' + \lambda T = 0
\end{gather}
$$

easily, we can get

$$
\begin{gather}
T(t) = ce^{-\lambda t}
\\\\
T_{n}(t) = ce^{-3A_{n}^{2}t}
\end{gather}
$$

---

then

$$
\begin{gather}
U_{n}(x, t) = c_{n} e^{-3A_{n}^{2}t}\sin(A_{n}x)
\\\\
U(x, t) = \sum_{n=1}^{\infty}{c_{n} e^{-3A_{n}^{2}t}\sin(A_{n}x)}
\\\\
U(x,0)=f(x) = \sum_{n=1}^{\infty}{c_{n} \sin(A_{n}x)}
\\\\
c_{n} = \frac{(f(x), \sin(A_{n}x))}{||\sin(A_{n}x)||}=\frac{\int_{0}^{5}f(x)\sin(A_{n}x)\ dx}{\int_{0}^{5}{\sin^{2}{(A_{n}x)}}\ dx}
\\\\
\\\\
U(x,t)=    \sum_{n=1}^{\infty}{\frac{\int_{0}^{5}f(x)\sin(A_{n}x)\ dx}{\int_{0}^{5}{\sin^{2}{(A_{n}x)}}\ dx}e^{-3A_{n}^{2}t}\sin(A_{n}x)}
\end{gather}
$$

---

## #3

$$
\begin{align}
& U_{t} = 5 U_{xx} & \text{for } 0<x<2, \quad t>0
\\\\
& U(0, t) = 1, \quad U(2, t) =7 & \text{for } t  >0
\\\\
& U(x, 0) = f(x) & \text{for } 0 \le x \le 2
\end{align}
$$

<br>

let $U(x, t) = u(x, t) + \phi(x)= X(x)T(t)+ \phi(x)$, then

$$
\begin{gather}
u_{t} = 5(u_{xx} + \phi(x)'')
\end{gather}
$$

take $\phi(x) = cx+d$ so that equation above would be heat equation

<br>

$$
\begin{gather}
U(0, t) = u(0, t) + \phi(0) = 1
\\\\
U(2, t) = u(2, t) + \phi(2) = 7
\\\\
\text{let } \phi(0) = 1, \phi(2) = 7
\\\\
\implies \phi(x) = 3x+1
\\\\
\implies u(0, t) = u(2, t) = 0
\end{gather}
$$



$$
\begin{align}
& 5X'' + \lambda X = 0 & \# eq1
\\\\
& T' + \lambda T = 0 & \# eq2
\end{align}
$$

### solve \#eq1

$$
\begin{gather}
5m^{2} + \lambda = 0
\\\\
m = \pm \sqrt{\frac{-\lambda}{5}}
\end{gather}
$$

- case $a^{2} = -\lambda / 5  > 0$

$$
\begin{gather}
X = c e^{ax} + de^{-ax}
\\\\
X(0) = c + d=0
\\\\
X(2) = ce^{2a}+de^{-2a} =0
\\\\
\implies c = d =0
\end{gather}
$$

thus, this case is trivial

- case $a^{2} = -\lambda / 5 = 0$

$$
\begin{gather}
X = cx + d
\\\\
X(0) = d = 0
\\\\
X(2) = 2c = 0
\\\\
\implies c= d = 0
\end{gather}
$$

also trivial solution

- case $-a^{2} =   -\lambda / 5 <0$

$$
\begin{gather}
X = c\cos(ax) + d\sin(ax)
\\\\
X(0) = c = 0
\\\\
X(2) = d\sin(2a) = 0
\end{gather}
$$

assume $d \neq  0$, then

$$
\begin{align}
&2a = 2\sqrt{\frac{\lambda}{5}}=  n\pi & n \in ℕ
\end{align}
$$

$$
\begin{gather}
\lambda_{n} = \frac{5}{4} n^{2}\pi^{2}
\end{gather}
$$
and the corresponding eigenfunction is
$$
\begin{gather}
X(x) = d\sin(\frac{n\pi}{2}x)
\end{gather}
$$


### solve \#eq2

$$
\begin{gather}
T'+ \frac{5}{4}n^{2}\pi^{2}T=0
\\\\
\implies T = ce^{-\frac{5}{4}n^{2}\pi^{2}t}
\end{gather}
$$

<br> 

finally, we have

$$
\begin{gather}
u_{n}(x, t) = X_{n}T_{n}= c_{n}\sin(\frac{n\pi}{2}x)e^{-\frac{5}{4}n^{2}\pi^{2}t}
\\\\
u(x, t)= \sum_{n=1}^{\infty}{c_{n}\sin(\frac{n\pi}{2}x)e^{-\frac{5}{4}n^{2}\pi^{2}t}}
\\\\
\text{let } g(x) = u(x, 0) = U(x, 0)-\phi(x) = f(x) - 3x-1
\\\\
u(x, 0) = \sum_{n=1}^{\infty}{c_{n}\sin(\frac{n\pi}{2}x)}= g(x)
\\\\
c_{n} = \frac{2}{2}\int_{0}^{2}{g(x)\sin(\frac{n\pi}{2}x)\ dx}
\end{gather}
$$

finally, we get

$$
\begin{gather}
u(x, t) = \sum_{n=1}^{\infty}{c_{n}\sin(\frac{n\pi}{2}x)e^{-\frac{5}{4}n^{2}\pi^{2}t}}
\\\\
U(x, t) = u(x, t) +\phi(x) = \sum_{n=1}^{\infty}{c_{n}\sin(\frac{n\pi}{2}x)e^{-\frac{5}{4}n^{2}\pi^{2}t}} + 3x+1
\end{gather}
$$

in which 
$$
\begin{gather}
c_{n} = \int_{0}^{2}{g(x)\sin(\frac{n\pi}{2}x)\ dx}
\end{gather}
$$
