const data = [
  "Xuân này hơn hẳn mấy xuân qua. Phúc lộc đưa nhau đến từng nhà. Vài lời cung chúc tân niên mới. Vạn sự an khang vạn sự lành.",
  "Hoa đào nở, chim én về, mùa xuân lại đến. Chúc một năm mới: nghìn sự như ý, vạn sự như mơ, triệu sự bất ngờ, tỉ lần hạnh phúc.",
  "Chúc bạn 12 tháng phú quý, 365 ngày phát tài, 8760 giờ sung túc, 525600 phút thành công 31536000 giây vạn sự như ý.",
  "Chúc mừng năm mới – Chúc bạn luôn: Đong đầy hạnh phúc – Gói trọn lộc tài – Giữ mãi an khang – Thắt chặt phú quý.",
  "Chúc mừng năm mới Canh Tý 2020. Chúc năm mới sức khỏe dẻo dai, công việc thuận lợi thăng tiến dài dài, phi những nước đại tiến tới thành công.",
  "Năm hết tết đến kính chúc mọi người thật nhiều sức khoẻ, miệng cười vui vẻ, tiền vào mạnh mẽ, cái gì cũng được suôn sẻ, để sống tiếp một cuộc đời thật là đẹp đẽ.",
  "Kính chúc mọi người một năm mới: Vui trong sức khoẻ, trẻ trong tâm hồn, khôn trong lý tưởng và trưởng thành mọi lĩnh vực.",
  "Năm mới chúc nhau sức khỏe nhiều. Bạc tiền rủng rỉnh thoải mái tiêu. Gia đình hạnh phúc bè bạn quý. Thanh thản vui chơi mọi buổi chiều.",
  "Mùa xuân xin chúc – Khúc ca an bình – Năm mới phát tài – Vạn sự như ý – Già trẻ lớn bé – Đầy ắp tiếng cười – Trên mặt ngời ngời – Tràn đầy hạnh phúc – Xuân đến hy vọng – Ấm no mọi nhà – Kính chúc ông bà – Sống lâu trăm tuổi – Kính chúc ba mẹ – Sức khoẻ dồi dào – Đôi lứa yêu nhau – Càng thêm nồng ấm – Các em bé nhỏ – Học giỏi chăm ngoan – Chúc Tết mọi người – Năm mới hoan hỉ – Gặp nhiều niềm vui.",
  "Năm hết Tết đến – Chúc ông chúc bà – Chúc cha chúc mẹ – Chúc cô chúc cậu – Chúc chú chúc dì – Chúc anh chúc chị – Chúc luôn các em – Chúc cả các cháu – Dồi dào sức khoẻ – Có nhiều niềm vui – Tiền xu nặng túi – Tiền giấy đầy bao – Đi ăn được khao – Về nhà người rước – Tiền vô như nước – Tình vào đầy tim – Chăn ấm nệm êm – Sung sướng ban đêm – Hạnh phúc ban ngày – Luôn luôn gặp may – Tràn đầy hạnh phúc.",
  "Năm mới Tết đến – Rước hên vào nhà – Quà cáp bao la – Mọi nhà no đủ – Vàng bạc đầy tủ – Gia chủ phát tài – Già trẻ gái trai – Sum vầy hạnh phúc – Cầu tài chúc phúc – Lộc đến quanh năm – An khang thịnh vượng.",
  "Đong cho đầy Hạnh phúc. Gói cho trọn Lộc tài. Giữ cho mãi An Khang. Thắt cho chặt Phú quý. Cùng chúc nhau Như ý, Hứng cho tròn An Khang, Chúc năm mới Bình An. Cả nhà đều Sung túc.",
  "Mừng 2020 phát tài phát lộc/ Tiền vô xồng xộc, tiền ra từ từ/ Sức khoẻ có dư, công danh tấn tới/ Tình duyên phơi phới, hạnh phúc thăng hoa/ Xin chúc mọi nhà một năm đại thắng",
  "Năm hết Tết đến – Đón chuột tiễn heo – Chúc ông chúc bà – Chúc cha chúc mẹ – Chúc cô chúc cậu – Chúc chú chúc dì – Chúc anh chúc chị – Chúc luôn các em – Chúc cả các cháu – Dồi dào sức khoẻ – Có nhiều niềm vui – Tiền xu nặng túi – Tiền giấy đầy bao – Đi ăn được khao – Về nhà người rước – Tiền vô như nước – Tình vào đầy tim – Chăn ấm nệm êm – Sung sướng ban đêm – Hạnh phúc ban ngày – Luôn luôn gặp may – Suốt năm Canh Tý.",
  "Năm mới đến rồi, chúc mọi người có một bầu trời sức khoẻ, một biển cả tình thương, một đại dương tình cảm, một điệp khúc tình yêu, một người yêu chung thủy, một tình bạn mênh mông, một gia đình thịnh vượng. Chúc các bà, các ông, các cô, các chú, các chị, các anh sang năm mới vạn sự như ý, tỉ sự như mơ, làm việc như thơ, đời vui như nhạc, coi tiền như rác, coi bạc như rơm, chung thủy với cơm và sắt son với phở.",
  "Chúc bạn có 1 bầu trời sức khỏe, 1 Biển cả tình thương, 1 Đại dương tình bạn, 1 Điệp khúc tình yêu, 1 Người yêu chung thủy, 1 Sự nghiệp sáng ngời, 1 Gia đình thịnh vượng. – Chúc năm mới cả gia đình bạn vạn sự như ý, Tỉ sự như mơ, Triệu triệu bất ngờ, Không chờ cũng đến!",
  "Thay mặt Đảng, Quốc hội, Chính phủ, Mặt trận Tổ quốc kính chúc đồng chí và gia đình một năm mới hạnh phúc, an khang, thịnh vượng!"
];


(function newFact() {
    var randomFact = Math.floor(Math.random() * data.length);
    document.getElementById('content').innerHTML = data[randomFact];
  })();