export default function InnerHtmlScript({creative, bg}: any) {
  
  let script;
  switch (creative) {
    case 'tripster-vn-excursions':
      script = `<script async src="https://c11.travelpayouts.com/content?trs=335720&shmarker=559764.vn&type=experience&country=vietnam&num=3&widget_template=horizontal-list&logo=true&notitle=false&nolistbutton=false&price=false&widgetbar=false&widgetbar_position=top&powered_by=true&erid=2VtzqxcGyz2&promo_id=4217" charset="utf-8"></script>`;
      break;
    case 'tripster-vn-danang':
      script = `<script async src="https://c11.travelpayouts.com/content?trs=335720&shmarker=559764.vn&city=%D0%94%D0%B0%D0%BD%D0%B0%D0%BD%D0%B3&num=2&powered_by=true&widget_template=horizontal-list&logo=true&notitle=false&nolistbutton=false&price=false&widgetbar=false&widgetbar_position=top&erid=2VtzquyUDHk&promo_id=4218" charset="utf-8"></script>`;
      break;
    case 'tripster-vn-hoshimin':
      script = `<script async src="https://c11.travelpayouts.com/content?trs=335720&shmarker=559764.vn&city=%D0%A5%D0%BE%D1%88%D0%B8%D0%BC%D0%B8%D0%BD&num=2&powered_by=true&widget_template=horizontal-list&logo=true&notitle=false&nolistbutton=false&price=false&widgetbar=false&widgetbar_position=top&erid=2VtzquyUDHk&promo_id=4218" charset="utf-8"></script>`;
      break;
    case 'yandex-vn-hoshimin':
      script = `<script async src="https://c193.travelpayouts.com/content?trs=335720&shmarker=559764.vn&city=10553&sorting=high_rating&theme=light&powered_by=true&erid=2VtzqvD1CB4&promo_id=8582" charset="utf-8"></script>`;
      break;
    case 'tripster-vn-hoyan':
      script = `<script async src="https://c11.travelpayouts.com/content?trs=335720&shmarker=559764.vn&type=experience&city=%D0%94%D0%B0%D0%BD%D0%B0%D0%BD%D0%B3&query=%D1%85%D0%BE%D0%B9%D0%B0%D0%BD&num=1&powered_by=true&widget_template=horizontal-list&logo=true&notitle=false&nolistbutton=false&price=false&widgetbar=false&widgetbar_position=top&erid=2VtzqvpEQZY&promo_id=4223" charset="utf-8"></script>`;
      break;
    case 'aviasales-1':
      script = `<script async src="https://tp.media/content?currency=rub&trs=335720&shmarker=559764.vn&show_hotels=false&powered_by=true&locale=ru&searchUrl=www.aviasales.ru%2Fsearch&primary_override=%230c73fe&color_button=%23fa742d&color_icons=%230c73fe&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23D3D3D3ff&color_focused=%230c73fe&border_radius=10&no_labels=&plain=false&origin=MOW&destination=SGN&promo_id=7879&campaign_id=100" charset="utf-8"></script>`;
      break;
    case 'tripster-vn-tours':
      script = `<script async src="https://c11.travelpayouts.com/content?trs=335720&shmarker=559764.vn&country=vietnam&num=3&widget_template=horizontal-list&logo=true&notitle=false&nolistbutton=false&price=false&widgetbar=false&widgetbar_position=top&powered_by=true&erid=2VtzquZafte&promo_id=8119" charset="utf-8"></script>`;
      break;
    default:
      script = ``;
      break;
  }

  return (
    script && <div className={`${bg && "bg-whiteSecondary p-6 rounded-xl block-border"}`} dangerouslySetInnerHTML={{ __html: script }} />
  );
}
