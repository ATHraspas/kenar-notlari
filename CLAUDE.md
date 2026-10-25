# Derkenar (eski adıyla Kenar Notları) — çalışma notu

Ata'nın kişisel öğrenme arşivi. İzlediği konuşmaların (önce Ulus Baker; sonra Hüseyin Ütün "Tasavvuf Kapısı" ve diğerleri) transkriptlerinden Claude tarafından yazılan kişi dosyaları ve kayıt özetleri.

- Site: GitHub Pages, bu depo (`ATHraspas/kenar-notlari`). Tek sayfa uygulama `index.html`, çevrimdışı için `sw.js`.
- İçerik: `data/icerik.json` → `{surum, isimler:{id:kisi}, kayitlar:{id:kayit}}`. Yeni kayıt/kişi eklerken bu dosya güncellenir, `surum` yenilenir ve `sw.js` içindeki `V` sürümü artırılır.
- Kişi alanları: ad, tur ("akim" ise akım/okul — kişi gibi gösterilmez), dogum (sayı, MÖ negatif), yil, yer, hicri, gelenek, ozet, sorun, donem, hikaye, kisilik, fikirler[{baslik,aciklama}], eserler[{ad,yil,not}], baglar[{ad,tur:beslendi|etkiledi|karsi|akraba,not}], kesif[{tur,ad,not}].
- Kayıt alanları: baslik, anlatan, tarih, sure, url, ozet, onemli[{baslik,metin}], akis[{baslik,metin}], kavramlar[{ad,aciklama}], isimler[{id,ad,ne}], kaynaklar, okuma, belirsiz[], sozluk[{ad,aciklama}].
- Kurallar: aynı isim tekrar gelirse yeni dosya açılmaz, mevcut dosya bütünlüklü güncellenir; farklı anlatıcının bakışı korunur. Kavramsal cümlelere parantez içinde gündelik örnek. Sade Türkçe.
- Ata'nın kendi notları BU DEPODA DEĞİL: özel depo `ATHraspas/kenar-notlari-veri`, dosya `notlar.json` → `{defter:{id:{metin,link,tur:fikir|okunacak|izlenecek|soru,tarih,guncel,bag?,silindi?}}, dosya:{…eski, artık kullanılmıyor}}`. `bag` notun bağlı olduğu dosya: kişi id'si ya da `t:kayit-id`; bağlı notlar hem o dosyanın altında hem Defter'de görünür. Uygulama her girdiyi `guncel` zamanına göre birleştirir; Claude bu dosyaya yazarsa `guncel` alanını şimdiki zamanla günceller.
- Fotoğraflar: `foto/kaynak.json` listesine Wikimedia Commons'tan kamu malı/serbest lisanslı görsel eklenip push edilince `.github/workflows/foto.yml` onu `foto/<id>.jpg` olarak indirir. Sonra kişinin kaydına `foto`, isteğe bağlı `fotoNot` ve `fotoKaynak{artist,lic,page}` yazılır. Telifli fotoğraf kullanılmaz (Deleuze, Ulus Baker gibi yakın dönem isimlerde baş harf kalır).
