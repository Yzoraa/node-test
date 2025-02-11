fetch("/userinfo")
    .then((response) => response.json())
    .then((data) => {
        // const update_data = JSON.parse(JSON.stringify(data));
        // let data_map = JSON.parse(localStorage.getItem("data_map")) || []; // 1. data_map 불러오기
        // data_map.push(...update_data); // 2. data 추가
        // localStorage.setItem("data_map", JSON.stringify(data_map)); // 3. 다시 로컬에 저장

        if (!Array.isArray(data)) data = []; // 배열인지 확인
        localStorage.setItem("data_map", JSON.stringify(data))

        const tableContainer = document.getElementById("userTable"); // 테이블 div
        if (data.length === 0) {
            tableContainer.innerHTML = "<p>등록된 회원이 없습니다.</p>";
            return;
        }

        let tableHTML = `
        <table border='1'>
            <thead>
            <tr>
                <th>이메일</th>
                <th>회원 이름</th>
                <th>나이</th>
            </tr>
            </thead>
            <tbody>
        `;

        data.forEach(user => {
        tableHTML += `
            <tr>
            <td>${user.email}</td>
            <td>${user.username}</td>
            <td>${user.age}</td>
            </tr>
        `;
        });

        tableHTML += `</tbody></table>`;
        tableContainer.innerHTML = tableHTML; // 테이블 추가
    })
    .catch((error) => {
    console.error("error", error);
});