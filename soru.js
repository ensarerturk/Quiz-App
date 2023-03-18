function Soru(soruMetni, cevapSecenek, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenek = cevapSecenek;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap; 
}

let sorular = [
    new Soru("1--JavaScript hangi kod bloklari arasina yazilir?", {a:"javascript", b:"scripting", c:"js", d:"script"}, "d"),
    new Soru("2-JavaScript'deki yorum satirlari, _______ tarafindan yok sayilir.", {a:"bilgisayar", b:"işletim sistemi", c:"tarayici", d:"derleyici"}, "c"),
    new Soru("3-Kullanici bir HTML öğesini tikladiğinda aşağidaki event (olaylardan) hangisi gerçekleşir ?", {a:"onclick", b:"onmouseclick", c:"onmouseover", d:"elementclick"}, "a"),
    // new Soru("4-JavaScript, hangi yorum tiplerini destekler?", {a:"Çok satirli yorumlari", b:"Tek satirli yorumlari", c:"Hiçbiri", d:"Hepsi"}, "d"),
    // new Soru("5-JavaScript'te hangisi bir değişken adi olamaz?", {a:"10var", b:"varName", c:"my_var", d:"var10"}, "a"),
]