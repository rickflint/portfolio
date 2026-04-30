
/* ── Custom cursor ── */
const cur = document.getElementById('cur');
const curR = document.getElementById('curR');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
;(function loop() {
rx += (mx - rx) * 0.14;
ry += (my - ry) * 0.14;
cur.style.left = mx + 'px';
cur.style.top = my + 'px';
curR.style.left = rx + 'px';
curR.style.top = ry + 'px';
requestAnimationFrame(loop);
})();
document.querySelectorAll('a, button, .card').forEach(el => {
el.addEventListener('mouseenter', () => {
cur.style.width = '16px'; cur.style.height = '16px';
curR.style.width = '56px'; curR.style.height = '56px';
curR.style.opacity = '0.8';
});
el.addEventListener('mouseleave', () => {
cur.style.width = '8px'; cur.style.height = '8px';
curR.style.width = '36px'; curR.style.height = '36px';
curR.style.opacity = '0.5';
});
});

/* ── Scroll reveal ── */
const obs = new IntersectionObserver(entries => {
entries.forEach((e, i) => {
if (e.isIntersecting) {
setTimeout(() => e.target.classList.add('up'), i * 90);
obs.unobserve(e.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
/* ── Filter ── */
function filt(cat, btn) {
document.querySelectorAll('.filt').forEach(b => b.classList.remove('on'));
btn.classList.add('on');
document.querySelectorAll('.card').forEach(c => {
const show = cat === 'all' || c.dataset.cat === cat;
c.style.display = show ? 'block' : 'none';
});
}
/* ── Stagger cards on load ── */
document.querySelectorAll('.card').forEach((c, i) => {
c.style.opacity = '0';
c.style.transform = 'translateY(24px)';
c.style.transition = `opacity 0.6s ease ${0.3 + i*0.07}s, transform 0.6s ease ${0.3 + i*0.07}s, border-color 0.25s`;
setTimeout(() => { c.style.opacity = '1'; c.style.transform = 'none'; }, 400 + i * 70);
});
