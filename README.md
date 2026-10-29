![screenshot](public/opengraph-image.webp)

# DMG Bootcamp | Generative AI Fundamentals with Gemini
[![Made With Love](https://img.shields.io/badge/Made%20With-Love-orange.svg)](https://github.com/chetanraj/awesome-github-badges) [![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT) [![GitHub pull-requests](https://img.shields.io/github/issues-pr/Developer-MultiGroup/multigroup-event-page.svg)](https://GitHub.com/Developer-MultiGroup/multigroup-event-page/pulls/) [![GitHub issues](https://img.shields.io/github/issues/Developer-MultiGroup/multigroup-event-page.svg)](https://GitHub.com/Developer-MultiGroup/multigroup-event-page/issues/)

## Genel Bakış

Bu repository Developer MultiGroup'un etkinliklerine kolayca ulaşabilmeniz için tasarlandı. Daha önceden yapılmış veya en yakın zamanda yapılacak olan etkinlikleri buradan inceleyebilir, katkıda bulunmak isterseniz `issues` kısmına göz atarak bizlere destek olabilirsiniz.

[English Documentation](/README-ENG.md)

Ayrıca daha fazla kaynak için [Data Science Awesome Repo'muzu](https://github.com/Developer-MultiGroup/DMG-Data-Science-Awesome) da ziyaret etmeyi unutmayın!

## Özellikler

- **Dinamik Yapı:** Hiçbir veritabanı ve depolama servisine gerek duymadan yeni etkinlikler oluşturun ve yayınlayın
- **Takvime Ekle:** Etkinlik oturumlarını takviminize kolayca ekleyin ve akıştan geri kalmayın.
- **Konumlara Erişin:** Platformunuza uygun harita uygulaması ile etkinlik alanına kolayca ulaşın.
- **Duyarlı Tasarım:** Etkinliklerimizi her platformdan takip edebilmeniz için tamamen dinamik bir tasarım.

## Kullanılan Teknolojiler

- **Next.js:** Kullanıcı arayüzünün geliştirilmesi.
- **Shadcn/ui:** Kullanılan hazır bileşenler (components).
- **Tailwind CSS:** Stil ve cihaza duyarlı tasarımlar.
- **Vercel:** Kod dağıtımı.
- **Framer:** Bileşen ve sayfa animasyonları.

## Kurulum Talimatları

### Ön Gereklilikler

- Node.js (version 16.x or later)
- npm or yarn

### Lokal Ortamda Çalıştırma

```bash
$ git clone https://github.com/Developer-MultiGroup/multigroup-event-page.git
$ cd multigroup-event-page
$ git branch genai-fund
$ npm install
$ npm run dev
```

Geliştirme versiyonunu görmek için tarayıcınızda `http://localhost:3000` adresine gidin.

### Yayın (statik site)

Site tamamen statik: `next.config.ts` içinde `output: "export"` var. `npm run build` her şeyi `out/` klasörüne yazar ve Cloudflare bu dosyaları doğrudan sunar. Hiç sunucu kodu çalışmaz, dolayısıyla işlemci harcanmaz.

```bash
npm run build && npx wrangler deploy   # genai.devmultigroup.com (wrangler.jsonc)
```

- Kaynaklar sayfası listeyi `public/resources.json` dosyasından okur (şu an boş). Kaynak eklemek için bu dosyayı doldurup yeniden yayınlamak yeterli.
- VPS'te (dmg-stack) aynı statik çıktı `Dockerfile` ile bir Caddy imajına konur ve 8080 portundan sunulur.
- Eskiden Google Sheets'ten okuyan `src/app/api/resources` yolu kaldırıldı. Statik export'ta çalışmıyordu, Sheets bağlantısı da zaten kopuktu. Kodu git geçmişinde duruyor (`5c81268` commit'inden önce).

## Etkinlik Dosyalarının Yönetimi

### Event Type Yapısı

```mermaid
classDiagram
    direction LR
    
    class Event {
        +Speaker[] speakers
        +Session[] sessions
        +Sponsor[] sponsors
    }
    
    class Speaker {
        +string fullName
        +string title
        +string phrase
        +string company
    }
    
    class Session {
        +string topic
        +string date
        +string dateTime
        +string startTime
        +string endTime
        +string speakerName
    }
    
    class Sponsor {
        +string tier
        +string sponsorSlug
    }

    Event *-- Speaker : contains
    Event *-- Session : contains
    Event *-- Sponsor : contains
```

### Fotoğraf Klasörleri

```bash
/public/images
    ├── speakers
    └── sponsors
```

Projenin fotoğraf depolama yapısı yukarıdaki gibidir. 

#### Konuşmacı Fotoğrafları

Tüm konuşmacıların fotoğrafları slugify edilmiş isimler ile bu klasörde tutulur ve herhangi bir etkinliğe konuşmacı eklenirken o isimle eklendiğinde fotoğraflar otomatik olarak bu klasörden alınır

#### Sponsor / Şirket Fotoğrafları

Sponsor fotoğraflarının mantığı da konuşmacılarla aynıdır. Slugify edilmiş bir isim ile sponsorların logoları bu klasörün içerisinde tutulur ve gerektiğinde etkinlik objesindeki array yapısına bu isim eklenir.

## Contributing

[Kurulum talimatları](#kurulum-talimatları)'ndaki aşamaları uygulayarak projeyi lokal ortamınızda ayağa kaldırdıktan sonra istediğiniz değişiklikleri yapabilir ve istediğiniz hataları düzelterek `Pull Request` gönderebilirsiniz. PR göndermek için aşağıdaki adımları takip edin:

1. **Projenin bir `Fork`'unu oluşturun**

2. **Yeni bir `Branch` oluşturun**

    ```bash
    git checkout -b feature/your-feature
    # or
    git git checkout -b fix/your-fix
    ```

3. **Değişikliklerinizi yapın**

4. **Değişikliklerinizi `Commit` olarak gönderin**

    ```bash
    git add .
    git commit -m "feat: Add a descriptive commit message"
    # or 
    git commit -m "fix: Add a descriptive commit message"
    ```

5. **Değişikliklerinizi `Repository`'ye yollayın**

    ```bash
    git push origin feature/your-feature
    ```

6. **`Pull Request` açın**
    Profilinizdeki bu projenin kendi `Fork`'undan ana `Repository`'ye bir PR oluşturun

## Repo Aktivitesi

<!-- ![Alt](https://repobeats.axiom.co/api/embed/94a2829520bc7e0ee83043b228c0db765d31cf5b.svg "Repobeats analytics image") -->

[![Star History Chart](https://api.star-history.com/svg?repos=Developer-MultiGroup/multigroup-event-page&type=Timeline)](https://star-history.com/#fDeveloper-MultiGroup/multigroup-event-page)

## License
Bu projenin [lisansına](LICENSE) göz atın.
## Contact
Eğer bir sorununuz varsa `me@furkanunsalan.dev` mail adresinden benimle iletişime geçebilirsiniz.
