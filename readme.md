Question 1 : What is the difference between null and undefined?

Answer: undefined হলো যখন value set করা হয় নাই বা value missing থাকে, null মানে intentionally value set না করা, বা বিভিন্ন purpose এ empty রাখা





Question 2 : What is the use of the map() function in JavaScript? How is it different from forEach()?

Answer: map() এর কাজ হলো array এর সব items এর উপর loop চালিয়ে একটা new array return করা ,

forEach() প্রতিটা items এর উপর loop চালায়, কিন্তু কিছুই return করে না





Question 3 : What is the difference between == and ===?

Answer: == দিয়ে compare করলে type convert করে ফেলে, তাই শুধু value মিললেই true হয়ে যায়।

=== এর বেলায় type আর value দুইটা একই হতে হবে।






Question 4 : What is the significance of async/await in fetching API data?

Answer: async দিয়ে একটা function কে asynchronous বানানো হয়, পরে await দিলে data না আসা পর্যন্ত wait করে, data আসলে তারপর পরের কাজ করে






Question 5: Explain the concept of Scope in JavaScript (Global, Function, Block).

Answer: Scope মানে হলো JavaScript এ কোন জায়গা থেকে কোন variable access করা যাবে তার নিয়ম

Global Scope: যে variable function er বাইরে declare করা হয়, সেটা প্রায় সব জায়গা থেকে access করা যায়

Function Scope: যে variable function এর ভিতরে declare করা হয়, সেটা function এর বাইরের থেকে access করা যায় না

Block Scope: { } block এর ভিতরে let/const দিয়ে declare করলে, সেটা ওই block এর বাইরে access করা যায় না