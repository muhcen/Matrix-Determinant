function determinant(m) {
    console.log(m);
    if (m.length === 1) {
        return m[0][0];
    } else if (m.length === 2) {
        const d = m[0][0] * m[1][1] - m[0][1] * m[1][0];
        return d;
    } else if (m.length === 3) {
        let newArr = [];

        for (let index = 0; index < m[0].length; index++) {
            let arr = [];
            for (let i = 1; i < m.length; i++) {
                // console.log(m[i].slice(index + 1, m.length + 1));
                arr.push([...m[i].slice(0, index), ...m[i].slice(index + 1, m.length + 1)]);
            }
            newArr.push(arr);
        }
        return (
            m[0][0] * determinant(newArr[0]) -
            m[0][1] * determinant(newArr[1]) +
            m[0][2] * determinant(newArr[2])
        );
    } else {
        let sum = 0;
        let r = -1;
        for (let index = 0; index < m[0].length; index++) {
            let newArr = [];

            for (let i = 1; i < m.length; i++) {
                // console.log(m[i].slice(index + 1, m.length + 1));
                newArr.push([...m[i].slice(0, index), ...m[i].slice(index + 1, m.length + 1)]);
            }

            sum += -r * m[0][index] * determinant(newArr);
            r = r * -1;
        }
        return sum;
    }
}
