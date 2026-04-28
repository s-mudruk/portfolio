# Portfolio — me.sergun.space

## Что это
Личное портфолио Сергея Мудрука. Кейс-сайт с работами по бренду и продукту.

## Стек
- Один файл: `index.html` (HTML + CSS + JS, ~1650 строк)
- Деплой: GitHub `s-mudruk/portfolio` → Vercel (автодеплой при push в `main`)
- Домен: `me.sergun.space`

## Файлы
```
index.html        — весь сайт
SPORTF-icon.png   — фавиконка (15KB PNG)
SPORTF-banner.png — OG-превью (1920×1080 PNG)
vercel.json       — cleanUrls: true, trailingSlash: false
```

## Деплой
```bash
# Автодеплой: просто push в main
git add index.html && git commit -m "..." && git push

# Ручной деплой (если нужно срочно):
npx vercel --prod
```

Vercel project ID: `prj_SFQolZCZoRNVUMQJfrdbyH8HQTUK`
Team ID: `team_2X1XIQFkRpKXJbYFuHAs14Qo`

## DNS
- `me.sergun.space` → CNAME `cname.vercel-dns.com`, **Proxy OFF** (серое облако)
- ВАЖНО: Cloudflare Proxy нельзя включать — сайт перестаёт открываться в России

## Design tokens
```css
--bg:        #131313   /* фон страницы */
--surface:   #2A2A2A   /* карточки */
--text:      #FFFFFF   /* основной текст */
--accent:    #1395FF   /* бренд-синий */
--secondary: #7E7E7E   /* второстепенный */
--muted:     #717171   /* приглушённый */
--divider:   #383838   /* разделители */
--error:     #FF3B30   /* ошибки */

--mono: "Geist Mono"   /* основной шрифт */
--sans: "Inter"
--display: "Bitter"
```

## Кастомный курсор
```css
.cursor       { z-index: 10002 }  /* шар */
.cursor-label { z-index: 10001 }  /* подпись */
```
Курсор должен быть выше любых оверлеев. Если добавляешь слой с `z-index > 10001` — поднимай курсор выше.

## Maintenance overlay
Код хранится в `index.html` всегда. Управление одной строкой в CSS:

```css
/* ВКЛЮЧИТЬ — показать заглушку */
.maint { display: flex; ... }

/* ВЫКЛЮЧИТЬ — скрыть, показать сайт */
.maint { display: none; ... }
```

Структура оверлея:
```html
<div class="maint" id="maint">
  <div class="maint-inner">
    <pre class="maint-cat">
 /\   /\
( ='w'= )
 )   (  )
(__ __)_)</pre>
    <p class="maint-title">скоро вернусь</p>
    <a class="maint-tg" href="https://t.me/mudruks">@mudruks</a>
  </div>
</div>
```

## OG / Twitter meta
```html
og:image  → https://me.sergun.space/SPORTF-banner.png (1920×1080)
og:url    → https://me.sergun.space
```

## Принципы
- Не трогать DNS без явного запроса
- Один файл — всё в `index.html`, не разбивать
- При правках сразу делать `git push` — Vercel задеплоит автоматически
- Не удалять блок `.maint` из HTML — это резервная заглушка
