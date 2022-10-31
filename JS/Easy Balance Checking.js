function balance(book) {
    let [budget, ...lines] = book
      .trim()
      .replace(/[^a-z0-9\s.]+/gi, '')
      .replace(/\s{2,}/g, (m) => m[0])
      .split(/\n/);
  
    let totalExpense = 0;
    const calcLines = lines.map((r) =>
      r.replace(/\S+$/g, (r) => {
        totalExpense += parseFloat(r);
        return `${parseFloat(r).toFixed(2)} Balance ${(
          budget - totalExpense
        ).toFixed(2)}`;
      }),
    );
  
    return (
      `Original Balance: ${parseFloat(budget).toFixed(2)}\r\n` +
      calcLines.join('\r\n') +
      '\r\n' +
      `Total expense  ${totalExpense.toFixed(2)}\r\n` +
      `Average expense  ${(totalExpense / calcLines.length).toFixed(2)}`
    );
  }