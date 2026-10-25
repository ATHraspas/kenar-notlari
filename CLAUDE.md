# Kenar Notları — çalışma notu

Ata'nın kişisel öğrenme arşivi. İzlediği konuşmaların (önce Ulus Baker; sonra Hüseyin Ütün "Tasavvuf Kapısı" ve diğerleri) transkriptlerinden Claude tarafından yazılan kişi dosyaları ve kayıt özetleri.

- Site: GitHub Pages, bu depo (`ATHraspas/kenar-notlari`). Tek sayfa uygulama `index.html`, çevrimdışı için `sw.js`.
- İçerik: `data/icerik.json` → `{surum, isimler:{id:kisi}, kayitlar:{id:kayit}}`. Yeni kayıt/kişi eklerken bu dosya güncellenir, `surum` yenilenir ve `sw.js` içindeki `V` sürümü artırılır.
- Kişi alanları: ad, tur ("akim" ise akım/okul — kişi gibi gösterilmez), dogum (sayı, MÖ negatif), yil, yer, hicri, gelenek, ozet, sorun, donem, hikaye, kisilik, fikirler[{baslik,aciklama}], eserler[{ad,yil,not}], baglar[{ad,tur:beslendi|etkiledi|karsi|akraba,not}], kesif[{tur,ad,not}].
- Kayıt alanları: baslik, anlatan, tarih, sure, url, ozet, onemli[{baslik,metin}], akis[{baslik,metin}], kavramlar[{ad,aciklama}], isimler[{id,ad,ne}], kaynaklar, okuma, belirsiz[], sozluk[{ad,aciklama}].
- Kurallar: aynı isim tekrar gelirse yeni dosya açılmaz, mevcut dosya bütünlüklü güncellenir; farklı anlatıcının bakışı korunur. Kavramsal cümlelere parantez içinde gündelik örnek. Sade Türkçe.
- Ata'nın kendi notları BU DEPODA DEĞİL: özel depo `ATHraspas/kenar-notlari-veri`, dosya `notlar.json` → `{defter:{id:{metin,link,tur,tarih,guncel,silindi?}}, dosya:{"kisi-id" | "t:kayit-id": {metin,guncel}}}`. Uygulama her girdiyi `guncel` zamanına göre birleştirir; Claude bu dosyaya yazarsa `guncel` alanını şimdiki zamanla günceller.
