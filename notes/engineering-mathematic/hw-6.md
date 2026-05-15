---
title: Homework 6
tags:
- Differential Equations
- Fourier Analysis
- Boundary Value Problems
- Sturm-Liouville
nav_visibility: normal
created: '2022-02-22'
last_modified: '2022-02-22'
lang: zh
category: solution:homework
---

<p align="center" style="white-space: pre-wrap; font-size:2rem">
Course Notes
</p>

<div style="page-break-after: always; visibility: hidden"></div>
<span style="color: #EF5040">=</span>==

## #1

$$
\begin{align}
&u_{t}(x, t) = 4u_{xx}(x, t) & \text{for } -\infty < x < \infty, \quad t > 0
\\\\
&f(x) = u(x, 0) = e^{-4|x|} & \text{for } -\infty < x < \infty
\end{align}
$$


$$
\begin{gather}
u_{\omega}(x, t) = (a_{\omega}\cos(\omega x)+b_{\omega}\sin(\omega x))e^{-k\omega^{2}t}
\\\\
f(x) = u(x, 0) = \int_{0}^{\infty}{[a_{\omega}\cos(\omega x)+b_{\omega}\sin(\omega x)]d\omega}
\\\\
\end{gather}
$$

$$
\begin{align}
a_{\omega}&= \frac{1}{\pi}\int_{-\infty}^{\infty}{f(x)\cos(\omega x) dx}
\\\\
&= \frac{1}{\pi}(\int_{0}^{\infty}e^{-4x}\cos(\omega x)dx +\int_{-\infty}^{0}{e^{4x}\cos(\omega x)dx})
\\\\
&= \frac{2}{\pi}\int_{0}^{\infty}{e^{-4x}\cos(\omega x)dx} =\frac{2}{\pi}\frac{4}{\omega^{2}+16}
\\\\
b_{\omega} &= \frac{1}{\pi}\int_{-\infty}^{\infty}{f(x)\sin(\omega x)dx}
\\\\
&= \frac{1}{\pi}(\int_{0}^{\infty}e^{-4x}\sin(\omega x)dx +\int_{-\infty}^{0}{e^{4x}\sin(\omega x)dx})
\\\\
&= 0
\end{align}
$$


$$
\begin{gather}
u(x, t) = \int_{0}^{\infty}{\frac{2}{\pi}\frac{4}{\omega^{2}+16}\cos(\omega x)d\omega}
\end{gather}
$$

---

## #2

$$
\begin{align}
&u_{t}(x, t) = 3u_{xx}(x, t) & \text{for }0 < x < 5, t > 0
\\\\
&u(0, t) = 1, u(5, t) = 6 & \text{for } t > 0
\\\\
&u(x, 0) = 1, &\text{for } 0\le x \le 5
\end{align}
$$
<br>

let $u(x, t) = U(x, t) + \phi(x) = X(x)T(t)+\phi(x)$

<br>

$$
\begin{gather}
XT'=3(X''T+\phi'')
\\\\
\phi(x) = cx+d
\\\\
\phi(0) = 1, \quad \phi(5) = 6
\\\\
\implies \phi(x)=x+1
\\\\
u(x, 0) = U(x, 0) + x+1 = 1
\\\\
\implies f(x) = U(x, 0) = -x
\end{gather}
$$

<br>

$$
\begin{gather}
\lambda_{n} = \frac{n^{2}\pi^{2}}{25}, \quad n = 1, 2, 3, \dots
\\\\
U(x, t) = \sum_{n=1}^{\infty}{c_{n}\sin(\sqrt{\lambda_{n}}x)\ e^{-3\lambda t}}
\\\\
U(x, 0) =\sum_{n=1}^{\infty}{c_{n}\sin(\sqrt{\lambda_{n}}x)}
\\\\
c_{n} = \frac{2}{5}\int_{0}^{5}{-x \sin(\frac{n\pi}{5}x)dx}= -\frac{2(5\sin(n\pi)-5n\pi\cos(n\pi))}{n^{2}\pi^{2}}
\end{gather}
$$

finally, we can get

$$
\begin{align}
u(x, t) &= U(x, t) + x + 1
\\\\
&= \sum_{n=1}^{\infty}{c_{n}\sin(\frac{n\pi}{5}x)} + x +1
\\\\
c_{n} &= -\frac{2(5\sin(n\pi)-5n\pi\cos(n\pi))}{n^{2}\pi^{2}}
\end{align}
$$

---
## #3

$$
\begin{align}
&\nabla^{2}u = 0 & \text{for } 0 < x < \pi, \quad 0<y<\pi
\\\\
&u(x, 0) = x(\pi-x) & \text{for } 0\le x\le \pi
\\\\
&u(x, \pi) = 0 & 0 \le x \le \pi
\\\\
&u(0, y) = 0 & \text{for }0 \le y \le \pi
\\\\
&u(\pi, y) = \sin(y) & 0 \le y \le \pi
\end{align}
$$

set 2 sub-problem


## sub-problem 1

$$
\begin{align}
&\nabla^{2}u_{1} = 0 & \text{for } 0 < x < \pi, \quad 0<y<\pi
\\\\
&u_{1}(x, 0) = x(\pi-x) & \text{for } 0\le x\le \pi
\\\\
&u_{1}(x, \pi) = 0 & 0 \le x \le \pi
\\\\
&u_{1}(0, y) = 0 & \text{for }0 \le y \le \pi
\\\\
&u_{1}(\pi, y) = 0 & 0 \le y \le \pi
\end{align}
$$

let $u_{1} = X(x)Y(y)$

then, we can get


$$
\begin{align}
&X''+\lambda X = 0 & \#ODE 1
\\\\
&Y'' - \lambda Y = 0 & \# ODE 2
\end{align}
$$

from boundary condition, we have

$$
\begin{gather}
X(0) = X(\pi) = 0
\\\\
Y(\pi) = 0
\\\\
u_{1}(x, 0) = x(\pi-x)
\end{gather}
$$


$$
\begin{gather}
\lambda_{n} = (\frac{n\pi}{L})^{2} = \frac{n^{2}\pi^{2}}{\pi^{2}}=n^{2}
\\\\
X(x) = \sin(nx)
\\\\
\text{for }n = 1, 2, \dots
\\\\
Y(y) = c\cosh(ny)+d\sinh(ny)
\\\\
\implies u_{1} = \sum_{n =1}^{\infty}{(c\cosh(ny)+d\sinh(ny))\sin(nx)}
\\\\
u_{1}(x, \pi) = \sum_{n =1}^{\infty}{(c_{n}\cosh(n\pi)+d_{n}\sinh(n\pi))\sin(nx)} = 0
\\\\
\implies d_{n} = -\frac{\cosh(n\pi)}{\sinh(n\pi)}c_{n}
\\\\
u_{1}(x, 0) = \sum_{n=1}^{\infty}{c_{n}\sin(nx)}= x(\pi-x)
\\\\
c_{n} = \frac{2}{\pi}\int_{0}^{\pi}{x(\pi-x)\sin(nx)dx}= \frac{2}{\pi}\frac{4\sin^{2}(\frac{n\pi}{2})-n\pi\sin(n\pi)}{n^{3}}
\end{gather}
$$

finally we get

$$
\begin{gather}
u_{1}(x,y) = \sum_{n=1}^{\infty}{(c_{n}\cosh(nx)+-\frac{\cosh(n\pi)}{\sinh(n\pi)}c_{n}\sinh(nx))\sin(nx)}
\\\\
c_{n} = \frac{2}{\pi}\frac{4\sin^{2}(\frac{n\pi}{2})-n\pi\sin(n\pi)}{n^{3}}
\end{gather}
$$



$$
\begin{gather}

\end{gather}
$$




## sub-problem 2

$$
\begin{align}
&\nabla^{2}u = 0 & \text{for } 0 < x < \pi, \quad 0<y<\pi
\\\\
&u(x, 0) = 0 & \text{for } 0\le x\le \pi
\\\\
&u(x, \pi) = 0 & 0 \le x \le \pi
\\\\
&u(0, y) = 0 & \text{for }0 \le y \le \pi
\\\\
&u(\pi, y) = \sin(y) & 0 \le y \le \pi
\end{align}
$$


- boundary condition :

$$
\begin{gather}
X(0) = 0
\\\\
Y(0) = Y(\pi) =  0
\end{gather}
$$

let $u_{2} = X(x)Y(y)$

then, we can get


$$
\begin{align}
&X''-\lambda X = 0 & \#ODE 1
\\\\
&Y'' + \lambda Y = 0 & \# ODE 2
\end{align}
$$
$$
\begin{gather}
\lambda_{n} = n^{2}
\\\\
Y(y) = \sin(ny)
\\\\
X(x) = c\cosh(nx)+d\sinh(nx)
\\\\
X(0) = c = 0
\\\\
\implies X(x) = d\sinh(nx)
\end{gather}
$$

then

$$
\begin{gather}
u_{2} = \sum_{n=1}^{\infty}{d_{n}\sinh{nx}\sin(ny)}
\\\\
u_{2}(\pi, y) = \sum_{n=1}^{\infty}{d_{n}\sinh(n\pi)\sin(ny)=\sin(y)}
\\\\
\implies \sinh(n\pi)d_{n}=\frac{1}{\pi}\int_{0}^{\pi}{\sin(y)\sin(ny)dy}
\end{gather}
$$
then
$$
\begin{gather}
u_{2}(x, y) = \sum_{n=1}^{\infty}{d_{n}\sinh(nx)\sin(ny)}
\\\\
d_{n} = \frac{2}{\pi\sinh(n\pi)}\int_{0}^{\pi}{\sin(y)\sin(ny)dy}
\end{gather}
$$


finally, we get

$$
\begin{align}
u(x, y) &= u_{1}(x, y) + u_{2}(x, y) 
\\\\
&=\sum_{n=1}^{\infty}{\bigg((c_{n}\cosh(nx)+-\frac{\cosh(n\pi)}{\sinh(n\pi)}c_{n}\sinh(nx))\sin(nx)+d_{n}\sinh(nx)\sin(ny)\bigg)}
\\\\
\end{align}
$$

$$
\begin{gather}
c_{n} = \frac{2}{\pi}\frac{4\sin^{2}(\frac{n\pi}{2})-n\pi\sin(n\pi)}{n^{3}}
\\\\
d_{n} = \frac{1}{\pi\sinh(n\pi)}\int_{0}^{\pi}{\sin(y)\sin(ny)dy}
\end{gather}
$$
