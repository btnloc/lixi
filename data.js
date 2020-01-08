const english = [
"I trust that age doth not wither nor custom stale your infinite variety.",
"Live as if you were to die tomorrow. Learn as if you were to live forever.​",
"Be yourself: everyone else is already taken.​",
"A person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.​",
"Promise me you’ll never stop dreaming.​",
"May the best of your past be the worst of your future.​",
"Your good luck will come in waves, and so does your bad, so you have to take the good with the bad and press forward.​",
"Keep your best wishes and your biggest goals close to your heart and dedicate time to them every day.​",
"May the forces of evil become confused on the way to your house.​",
"Every day is a fresh beginning, every morn is the world made new.​",
"With the new day comes new strength and new thoughts.​",
"What a wonderful thought it is that some of the best days of our lives haven't even happened yet.​",
"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor and some style.​",
"Life is change. Growth is optional. Choose wisely.​",
"When life is sweet, say thank you and celebrate. When life is bitter, say thank you and grow.​",
"Remove ‘shoulds’ from your vocabulary this year. Start your journey of self-love now.​",
"We will open the book. Its pages are blank. We are going to put words on them ourselves. The book is called Opportunity and its first chapter is New Year’s Day.​",
"Never underestimate the power you have to take your life in a new direction.​",
"You can get excited about the future. The past won’t mind.​",
"If you’re brave enough to say goodbye, life will reward you with a new hello.​",
"Words can not say the happiness that is sent your way. May you find only the best, wishing you all happiness.​"
];

const vietnamese = [
"Chúc cảm xúc của bạn luôn đa sắc đa màu cho dù ở tuổi nào đi nữa. ​",
"Chúc bạn sống trọn vẹn và học hết chân trời góc bể.​",
"Chúc bạn luôn là chính mình.​",
"Chúc bạn có nhiều người để yêu thương, nhiều việc để làm và nhiều ước mơ để phấn đấu. Chúc bạn hạnh phúc.​",
"Chúc bạn không bao giờ từ bỏ ước mơ.​",
"Chúc bạn có một năm phía trước tốt đẹp nhiều hơn và thịnh vượng nhiều hơn.​",
"Chúc bạn đối diện với cuộc sống muôn màu với tinh thần cầu tiến. May mắn cũng được, xui xẻo cũng được, miễn là cầu tiến.​",
"Chúc bạn không ngừng để tâm và phấn đấu cho những mục tiêu quan trọng của mình. ​",
"Chúc mọi điều xui xẻo hay xấu xí bay màu khỏi cuộc sống của bạn.​",
"Chúc bạn mỗi ngày là một khởi đầu thú vị, mỗi buổi sáng là một thế giới thú vị.​",
"Chúc một năm mới nhiều sức mạnh mới và nhiều tư duy mới.​",
"Chúc bạn không bao giờ gặp ngày đẹp nhất, vì ngày mai luôn đẹp hơn ngày hôm nay.​",
"Chúc bạn sống tích cực, có cá tính riêng, có đam mê và giàu lòng trắc ẩn.​",
"Chúc bạn hiểu rõ cuộc đời. Và chọn phát triển nó đúng đắn.​",
"Chúc bạn biết trân trọng mọi thành công, cũng như mọi thất bại, và luôn tiến lên.​",
"Chúc bạn yêu bản thân hơn và bỏ ngoài tai những lời khuyên sáo rỗng.​",
"Chúc bạn viết được nhiều chương vào quyển sách Những Cơ Hội Của Tôi Năm 2020, bắt đầu với chương Mồng 1 Phát Tài.​",
"Chúc bạn hiểu rõ bản thân và biết định hướng bản thân.​",
"Chúc bạn có niềm tin vào tương lai, dù quá khứ hay hiện tại thế nào đi nữa.​",
"Chúc bạn đủ bản lĩnh để quên mọi điều xấu xí của năm cũ, và chuẩn bị đón một năm mới, tốt, đẹp.​",
"Chúc bạn hạnh phúc. Không phải, trên cả hạnh phúc.​",
];

(function newFact() {
    var randomFact = Math.floor(Math.random() * english.length);
    document.getElementById('content-english').innerHTML = english[randomFact];
    document.getElementById('content-vietnamese').innerHTML = vietnamese[randomFact];
    document.getElementById("signature").innerHTML = window.location.hostname;
})();