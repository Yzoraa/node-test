const userList = <%- JSON.stringify(userList) %>;

const tableContainer = document.getElementById("searchTable");

if (userList.length > 0) {
  let tableHTML = `
    <table border="1">
      <thead>
        <tr>
          <th>이메일</th>
          <th>회원 이름</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
  `;

  userList.forEach(user => {
    tableHTML += `
      <tr>
        <td>${user.email}</td>
        <td>${user.username}</td>
        <td>${user.age}</td>
      </tr>
    `;
  });

  tableHTML += `
      </tbody>
    </table>
  `;

  tableContainer.innerHTML = tableHTML;  // 완성된 테이블을 삽입
} else {
  tableContainer.innerHTML = "<p style='color: red;'>검색 결과가 없습니다.</p>";  // 결과가 없을 때 메시지
}
