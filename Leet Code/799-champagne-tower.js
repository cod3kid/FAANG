function champagneTower(poured, query_row, query_glass) {
    let flow_through = [];
    flow_through[0] = [poured];
    for (let row = 1; row <= query_row; row++) {
        flow_through[row] = new Array(row + 1).fill(0);
        for (let glass = 0; glass <= row; glass++) {
            if (glass <= row - 1 && flow_through[row - 1][glass] > 1)
                flow_through[row][glass] += (flow_through[row - 1][glass] - 1) / 2;
            if (glass - 1 >= 0 && flow_through[row - 1][glass - 1] > 1) {
                flow_through[row][glass] += (flow_through[row - 1][glass - 1] - 1) / 2;
            }

        };
    }

    return flow_through[query_row][query_glass] > 1 ? 1 : flow_through[query_row][query_glass];
}

poured = 1, query_row = 10, query_glass = 1
console.log(champagneTower(poured, query_row, query_glass))