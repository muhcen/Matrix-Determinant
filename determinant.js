function determinant(m) {
    console.log(m);
    if (m.length === 1) {
        return m[0][0];
    } else if (m.length === 2) {
        const d = m[0][0] * m[1][1] - m[0][1] * m[1][0];
        return d;
    } else {
        let sum = 0;
        let r = -1;
        for (let index = 0; index < m[0].length; index++) {
            let newArr = [];

            for (let i = 1; i < m.length; i++) {
                newArr.push([...m[i].slice(0, index), ...m[i].slice(index + 1, m.length + 1)]);
            }

            sum += -r * m[0][index] * determinant(newArr);
            r = r * -1;
        }
        return sum;
    }
}

console.log(
    determinant([
        [3, 30, 34, 3, -43, 3, 2],
        [3, 3, 4, 3, 3, -3, 2],
        [3, 3, 4, 3, 3, 3, 2],
        [3, 30, -4, -3, 3, 3, 2],
        [3, 3, 4, 30, 3, 3, 2],
        [3, -1, 4, 1, 1, 1, 12],
        [1, 1, 4, 10, 1, 1, 2],
    ]),
);
