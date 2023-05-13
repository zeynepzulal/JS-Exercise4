/*Ödevimizde bir çiftçiye yardım edeceğiz. Niko Amca anlaşmalı oldugu çorbacıya gerçek zamanlı istatistik vermek istiyor. Müslüman olan çorbacı sorduğu anda çorbalarda kullanabileceği kaç tane hayvan bacağı olduğu bilgisini almak istiyor.
Çiftlikteki hayvanlar bir array içerisinde karışık şekilde tutulacak ve bu çiftlikte sadece şu hayvanlar var:
- inek
- tavuk
- domuz
- koyun

Array örnegi: [”inek“, ”inek“, ”tavuk“, ”tavuk“, ”tavuk“, ”domuz“, ”domuz“, ”koyun“, ”koyun“ ]

Program verilen array üzerinden Müslüman çorbacıda kullanılabilir toplam hayvan bacağı sayısını bulacak ve console’a bastıracak.
*/

const arr = ["inek","inek","tavuk","tavuk","tavuk","domuz","domuz","koyun","koyun"];

let a = arr.filter(e => e === "inek" || e === "domuz" || e === "koyun");
let b = arr.filter(e => e === "tavuk");
let res = a.length*4 + b.length*2;
console.log(res);

