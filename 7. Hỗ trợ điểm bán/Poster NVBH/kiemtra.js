// Xét từng .page riêng: có khối nào bị cắt chữ hoặc tràn khỏi khổ giấy không
module.exports = function () {
  const out = { pages: 0, bad: [], gaps: [] };
  document.querySelectorAll('.page').forEach((page, pi) => {
    out.pages++;
    const pr = page.getBoundingClientRect();
    page.querySelectorAll('*').forEach(el => {
      const cls = el.className && el.className.baseVal !== undefined ? el.className.baseVal : (el.className || '');
      if (el.scrollHeight > el.clientHeight + 1 && el.clientHeight > 0)
        out.bad.push(`trang ${pi + 1}: CẮT CHỮ <${el.tagName.toLowerCase()} .${cls}> ${el.clientHeight}→${el.scrollHeight}px`);
      const r = el.getBoundingClientRect();
      const over = Math.max(r.bottom - pr.bottom, r.right - pr.right);
      if (r.height > 0 && over > 1)
        out.bad.push(`trang ${pi + 1}: TRÀN KHUNG <${el.tagName.toLowerCase()} .${cls}> lố ${Math.round(over)}px`);
    });
    const last = page.children[page.children.length - 1];
    out.gaps.push(Math.round(pr.bottom - last.getBoundingClientRect().bottom));
  });
  return out;
};
