---
title: Homework 4
tags:
- Differential Equations
- Sturm-Liouville
- Boundary Value Problems
nav_visibility: normal
created: '2022-02-22'
last_modified: '2022-02-22'
lang: zh
category: solution:homework
---
<p align="center" style="white-space: pre-wrap; font-size:2rem">
工程數學（二）
Homework #4
Instructor's name: [Instructor Name]
[Student ID]
Due : [Date]
</p>

<div style="page-break-after: always; visibility: hidden"></div>

## #1
$$
\begin{align}
(e^{2x}y')' + \lambda e^{2x}y &= 0
\\\\
\implies e^{2x}y'' + 2e^{2x}y'+\lambda e^{2x}y &= 0
\end{align}
$$

so the characteristics equation is 
$$
\begin{gather}
m^{2} + 2m + \lambda=0
\\\\
m = -1 \pm \sqrt{1-\lambda}
\end{gather}
$$

- case 1 : $a^{2} = 1- \lambda > 0$

$$
\begin{gather}
y = c_{1}e^{(-1+a)x}+c_{2}e^{(-1-a)x}
\\\\
y(0) = c_{1}+c_{2} = 0
\\\\
y(\pi) = c_{1}e^{(-1+a)\pi} - c_{1}e^{(-1-a)\pi} = 0
\\\\
\implies a = 0 \qquad (\rightarrow \leftarrow)
\end{gather}
$$

In this case we assume that $a$ should be $>0$, so there is no eigenvalue.

- case 2: $a^{2} = 1- \lambda = 0$


$$
\begin{gather}
y= e^{-x}(c_{1} + c_{2}x)
\\\\
y(0) = c_{1} = 0
\\\\
y(\pi) = e^{-\pi}(c_{2}\pi) = 0
\\\\
\implies c_{2} = 0
\end{gather}
$$

$y(x) = 0$ is trivial.

- case 3 : $-a^{2} = 1 - \lambda < 0$

$$
\begin{gather}
y = e^{-x}(c_{1}\cos{(ax)} +  c_{2}\sin{(ax)})
\\\\
y(0) = c_{1} = 0
\\\\
y(\pi) = e^{-\pi}( c_{2} \cdot \sin(a\pi)) = 0
\end{gather}
$$

$c_{2} = 0$ would make the solution of $y$ trivial, so let assume $c_{2} \neq 0$

$$
\begin{gather}
\sin{(a\pi)} = 0
\\\\
\implies a\pi = \pi, 2\pi, 3\pi, \dots
\\\\
a = n \quad (n \in ℕ)
\end{gather}
$$

since $a = \sqrt{\lambda - 1} = n$, 

$$
\begin{gather}
\lambda_{n} = n^{2}+1
\end{gather}
$$

and the eigenfunction $\phi$ would be

$$
\begin{gather}
\phi_{n} = c_{2}e^{-x}\cdot \sin{(nx)}
\end{gather}
$$

---

## #2
$$
\begin{gather}
y_{tt} = 4y_{xx} + 8y
\\\\
0< x< 10, \quad t > 0
\\\\
y(0, t) = y(10, t) = 0, \quad \text{for } t > 0
\\\\
y(x, 0) = 0, y_{t}(x, 0) = x, \quad \text{for } 0\leq x \leq 10
\end{gather}
$$

let $y = X(x)T(t)$

$$
\begin{gather}
XT'' -8XT= 4X''T 
\\\\
\frac{T''-8T}{4T} =\frac{X''}{X} = -\lambda
\\\\
T'' -(8 -4 \lambda) T = 0
\\\\
X'' + \lambda X = 0
\end{gather}
$$


- solve $X'' + \lambda X = 0$

the characteristics roots are 
$$
\begin{gather}
\pm \sqrt{-\lambda}
\end{gather}
$$

- case $\lambda =0$

$$
\begin{gather}
X(x) = cx + d
\\\\
X(0) = d= 0
\\\\
X(10) = 10c = 0
\\\\
c = d = 0
\end{gather}
$$

this solution is trivial

- case $a^{2} = -\lambda > 0$


$$
\begin{gather}
X(x) = c_{1} e^{ax} +c_{2}e^{-ax}
\\\\
X(0) = c_{1} + c_{2} = 2
\\\\
X(10) = c_{1} e^{10a} + c_{2}e^{-10a} =0
\\\\
\implies c_{1} = c_{2} = 0
\end{gather}
$$

this solution is also trivial

- case $-a^{2} = -\lambda < 0$

$$
\begin{gather}
X(x) = c_{1}\cos(ax) + c_{2}\sin(ax)
\\\\
X(0) = c_{1} = 0
\\\\
X(10) = c_{2}\sin(10a) = 0
\end{gather}
$$
$c_{2} = 0$ would make the solution trivial, so let's take $c_{2}\neq 0$
$$
\begin{gather}
10a = n\pi \quad, \text{for } n \in ℕ
\\\\
a = \frac{n\pi}{10}
\\\\
\lambda_{n} = a^{2} = \frac{n^2\pi^{2}}{100}
\end{gather}
$$

and therefore we get

$$
\begin{gather}
X_{n}(x) = \sin(\frac{n\pi}{10}x)
\end{gather}
$$




- solve $T'' -(8 -4 \lambda) T = 0$



characteristics equation : 
$$
\begin{gather}
m^{2} - (8-4\lambda_{n}) m = 0
\\\\
m = \pm \sqrt{8-4\lambda_{n}} = \pm \sqrt{8-\frac{n^{2}\pi^{2}}{25}}
\end{gather}
$$

- case : $n \leq 4$

let $a^{2} = 8-4\lambda_{n} > 0$



$$
\begin{gather}
T(t) = c_{1}e^{at} + c_{2}e^{-at}
\\\\
T(0) = c_{1} + c_{2} = 0
\\\\
\implies c_{1} = -c_{2}
\end{gather}
$$

then

$$
\begin{gather}
y_{n}(x, t) = b_{n}\sin{(\frac{n\pi}{10}x)}(e^{at}-e^{-at})
\\\\
y(x, t) = \sum_{n=1}^{4}{b_{n}\sin{(\frac{n\pi}{10}x)}(e^{at}-e^{-at})}
\\\\
y_{t}(x, t) = \sum_{n=1}^{4}{a\ b_{n}\sin{(\frac{n\pi}{10}x)}(e^{at}+e^{-at})}
\\\\
y_{t}(x, 0) = \sum_{n=1}^{4}{2a\ b_{n}\sin{(\frac{n\pi}{10}x)}} = x
\\\\
\implies 2a\ b_{n} = \frac{2}{10}\int_{0}^{10}x\ \sin(\frac{n\pi x}{10})\ dx
\\\\
\implies b_{n} = \frac{1}{2a}\cdot(-\frac{n\pi}{5}\cos{(n\pi)}) = -\frac{n\pi}{10\sqrt{8-\frac{n^2\pi^{2}}{25}}}\cos{(n\pi)}

\end{gather}
$$


- case : $n \geq 5$

let $-a^{2} = 8-4\lambda_{n} < 0$

then

$$
\begin{gather}
T(t) = c_{1}\cos{(at)} + c_{2}\sin{(at)}
\\\\
T(0) = c_{1} = 0
\\\\
T_{n}(t) = c \sin{(at)}
\\\\
\implies
y_{n}(x, t) = c_{n}\sin{(\frac{n \pi x}
{10})\sin{(at)}}
\\\\
y(x, t) = \sum_{n = 5}^{\infty}{c_{n} \sin{(\frac{n\pi x}{10})}}\ \sin{(at)}
\\\\
y_{t}(x, t) = \sum_{n=5}^{\infty}{ac_{n}\sin{(\frac{n\pi x}{10})}\ \cos{(at)}}
\\\\
y_{t}(x, 0) =  \sum_{n=5}^{\infty}{ac_{n}\sin{(\frac{n\pi x}{10})}}=x
\\\\
\implies a c_{n} =\frac{2}{10}\int_{0}^{10}{x\ \sin{(n\pi x/10)}\ dx}
\\\\
c_{n} = \frac{1}{a}\frac{-n\pi}{5}\cos{(n\pi)}=\frac{-n\pi}{5\sqrt{\frac{n^{2}\pi^{2}}{25}-8}}\cos{(n\pi)}
\end{gather}
$$

finally, we have

$$
\begin{gather}
y(x, t) = \sum_{n=1}^{4}{b_{n}\sin{(\frac{n\pi}{10}x)}(e^{at}-e^{-at})} + \sum_{n = 5}^{\infty}{c_{n} \sin{(\frac{n\pi x}{10})}}\ \sin{(at)}
\end{gather}
$$

in which 
$$
\begin{gather}
b_{n} =  -\frac{n\pi}{10\sqrt{8-\frac{n^2\pi^{2}}{25}}}\cos{(n\pi)}
\\\\
c_{n}=\frac{-n\pi}{5\sqrt{\frac{n^{2}\pi^{2}}{25}-8}}\cos{(n\pi)}
\end{gather}
$$

---
## #3
assume $y(x, t) = X(x) T(t)$
$$
\begin{gather}
XT'' + 2XT' + 2XT = X''T
\\\\
X(T''+2T'+2T) = X''T
\\\\
\end{gather}
$$

then we have

$$
\left\{
\begin{gather}
X'' + \lambda X = 0
\\\\
T'' + 2T' +(2+\lambda)T =0
\end{gather}\right.
$$

### solve $X'' + \lambda X = 0$
$$
\begin{gather}
-a^{2} = -\lambda
\\\\
X(x) = c_{1}\cos(ax) + c_{2}\sin(ax)
\\\\
X(0) = c_{1} = 0
\\\\
X(\pi) = c_{2}\sin{(a\pi)} =0
\end{gather}
$$
assume $c_{2} \neq 0$
$$
\begin{gather}
a\pi = n\pi
\\\\
\lambda_{n} = n^{2}
\\\\
X_{n}(x) = \sin(nx)
\end{gather}
$$

### solve $T'' + 2T' +(2+\lambda)T =0$
the characteristics equation would be
$$
\begin{gather}
m^{2} + 2m + (2 + n^{2}) = 0
\\\\
m = -1 \pm \sqrt{-n^{2}- 1}
\end{gather}
$$

and let $-k^{2} = -n^{2} - 1$

$$
\begin{gather}
T(t) = e^{-t}(c_{1}\cos{(kt)}+c_{2}\sin{(kt)})
\\\\
T'(t) = -e^{-t}(c_{1}\cos{(kt)}+c_{2}\sin{(kt)}) + e^{-t}k(-c_{1}\sin{(kt)}+c_{2}\cos{(kt)})
\\\\
T'(0) = -(c_{1})+k(c_{2}) = 0
\\\\
T_{n}(t) = e^{-t}c_{n}(k\cos{(kt)} + \sin{(kt)})
\\\\
y_{n}(x, t) = e^{-t}c_{n}\sin{(nx)}(k\cos{(kt)} + \sin{(kt)})

\\\\
y(x, 0) = \sum_{n=1}^{\infty}{kc_{n}\sin{(nx)}} = f(x)
\\\\
kc_{n} = \frac{2}{\pi}\int_{0}^{\pi}{f(x)\sin{nx}\ dx}
\end{gather}
$$

finally,

$$
\begin{gather}
y(x, t) = \sum_{n=1}^{\infty}{e^{-t}c_{n}\sin{(nx)}(\sqrt{n^{2}+1}\cos{(\sqrt{n^{2}+1}t)} + \sin{(\sqrt{n^{2}+1}t)})}
\\\\
c_{n} = \frac{2}{\pi \sqrt{n^{2}+1}}\int_{0}^{\pi}{f(x)\sin{nx}\ dx}
\end{gather}
$$

