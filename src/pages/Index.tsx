import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const cases = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/files/MARINA-GOLOVKO-Nastavnik-dlya-MLM.png",
      name: "Марина Головко",
      role: "Наставник для МЛМ",
      result: "+375.000 руб."
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/files/MARIYa-ALEJNIKOVA.png",
      name: "Мария Алейникова",
      role: "Эксперт по продажам",
      result: "337.000 руб на тесте новой воронки"
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/files/NATALYa-SMIRNOVA-Kouch.png",
      name: "Наталья Смирнова",
      role: "Коуч",
      result: "300.000₽ в первую неделю запуска"
    },
    {
      id: 4,
      image: "https://cdn.poehali.dev/files/OLGA-KVARTALNOVA-Brejn-trener-245000-rub.png",
      name: "Ольга Кварталнова",
      role: "Брейн-тренер",
      result: "+245.000 руб."
    },
    {
      id: 5,
      image: "https://cdn.poehali.dev/files/OLGA-MAR-185000-rub-Specialist-po-trafiku.png",
      name: "Ольга Мар",
      role: "Специалист по трафику",
      result: "+185.000 руб."
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center space-y-10 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              90-дневный трекинг продаж<br />
              для экспертов и предпринимателей
            </h1>
            <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
              Совместная работа над вашим проектом, где мы пересобираем или запускаем продажи под реалии 2026 года 
              и доводим конкретные действия до заявок и денег.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
              Не обучение и не мотивация.<br />
              Чёткая стратегия, фокус на 1–2 ключевых действиях и регулярные разборы вашего проекта.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToContact}
            >
              Хочу на трекинг
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-10 py-7 text-lg font-bold"
              onClick={() => document.getElementById('format')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать подробности
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Calendar" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground">90 дней работы</h3>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Target" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Персональная стратегия</h3>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Users" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Ограниченное количество мест</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Что мы делаем в <span className="text-primary">трекинге</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="RefreshCw" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Пересборка продаж под рынок 2026</h3>
                <p className="text-muted-foreground">
                  Учитываем изменения в законодательстве, налогах, стоимости трафика и поведении клиентов. 
                  Собираем продажи так, чтобы они были устойчивыми, а не «на удаче».
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Icon name="GitBranch" className="text-secondary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Рабочие модели продаж и воронки</h3>
                <p className="text-muted-foreground">
                  Выбираем одну модель, которая подходит именно вам, и доводим её до результата. 
                  Без лишних инструментов и хаоса.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Package" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Продукт и оффер</h3>
                <p className="text-muted-foreground">
                  Упаковываем экспертность в понятный продукт, формируем оффер, который легко объяснить и легко продать.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Icon name="Send" className="text-secondary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Продажи через блог и базу</h3>
                <p className="text-muted-foreground">
                  Настраиваем поток заявок из Telegram: через контент, диагностики, переписки и автоворонки.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Нейросети в работе эксперта</h3>
                <p className="text-muted-foreground">
                  Внедряем ИИ для ускорения работы: тексты, контент, презентации, сайты, воронки — быстрее и без перегруза.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Icon name="UserCheck" className="text-secondary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Персональный трек</h3>
                <p className="text-muted-foreground">
                  Вы не «один из». Стратегия, решения и фокус под ваш опыт, нишу и цели.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              С какими запросами приходят в <span className="text-primary">трекинг</span>
            </h2>
          </div>

          <Card className="border-none shadow-xl bg-white">
            <CardContent className="pt-8 space-y-6">
              <p className="text-xl font-semibold text-foreground">
                Трекинг подходит тем, кто хочет:
              </p>
              <div className="space-y-4">
                {[
                  "запустить продажи с нуля или перестать метаться между инструментами",
                  "увеличить доход и сделать продажи стабильными",
                  "понять, что именно делать дальше, а не «пробовать всё подряд»",
                  "автоматизировать процессы и освободить время",
                  "внедрить автоворонки и рабочие связки по трафику",
                  "собрать понятный план роста на 6–12 месяцев"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <Icon name="Check" className="text-white" size={16} />
                    </div>
                    <p className="text-lg text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="format" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Как проходит <span className="text-primary">работа</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Video", text: "12 глубоких разборов со мной" },
              { icon: "Route", text: "индивидуальный трек под ваш проект" },
              { icon: "MessageCircle", text: "рабочий чат с поддержкой" },
              { icon: "Database", text: "база знаний с инструментами и шаблонами" },
              { icon: "Users", text: "4 встречи с профильными экспертами (юрист, бухгалтер, продажи в переписке, нейросети)" },
              { icon: "Briefcase", text: "список проверенных подрядчиков" }
            ].map((item, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-lg">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={item.icon} className="text-primary" size={24} />
                  </div>
                  <p className="text-base text-foreground font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary bg-primary/5 shadow-lg">
            <CardContent className="pt-6 text-center">
              <p className="text-lg md:text-xl text-foreground font-semibold">
                Мы определяем целевые действия и идём в них до результата,<br />
                а не до очередных инсайтов.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              С чем вы выходите через <span className="text-primary">90 дней</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "Settings", text: "понятная система продаж под ваш продукт" },
              { icon: "Rocket", text: "запущенные или усиленные продажи" },
              { icon: "Filter", text: "рабочие воронки и источники заявок" },
              { icon: "Shield", text: "уверенность в продукте, цене и действиях" },
              { icon: "TrendingUp", text: "чёткий план масштабирования на 2026 год" },
              { icon: "Compass", text: "понимание, как адаптироваться к изменениям рынка" }
            ].map((item, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-secondary" size={24} />
                    </div>
                    <p className="text-lg text-foreground font-medium pt-2">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Светлана Скорнякова
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                Я 20 лет в продажах, из них более 10 лет — в онлайн-маркетинге и сопровождении экспертов и предпринимателей.
              </p>
              <p>
                Работаю с проектами в разных нишах и на разных этапах — от старта до масштабирования.
              </p>
              <p>
                Мой фокус — не «знания ради знаний», а конкретные действия, которые приводят к заявкам, клиентам и деньгам.
              </p>
              <p className="font-semibold">
                Именно поэтому формат трекинга — это совместная работа, где продажи перестают быть хаотичными 
                и становятся управляемыми.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Реальные <span className="text-primary">результаты</span> клиентов
            </h2>
            <p className="text-xl text-muted-foreground">
              Кейсы наших клиентов, которые вышли на стабильный доход
            </p>
          </div>

          <div className="space-y-8">
            {cases.map((caseItem, index) => (
              <div 
                key={caseItem.id}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={caseItem.image} 
                  alt={caseItem.name}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Почему важно <span className="text-primary">не откладывать</span>
            </h2>
          </div>

          <Card className="border-none shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="pt-8 space-y-6 text-center">
              <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
                Рынок уже изменился, и дальше будет только сложнее и дороже.
              </p>
              <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
                Сейчас ещё можно спокойно протестировать модели, собрать продукт и выстроить систему 
                без давления и гонки.
              </p>
              <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto font-semibold">
                Количество мест ограничено, формат камерный — именно поэтому участники получают 
                персональное внимание и результат, а не «массовое обучение».
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Начните 2026 год с собранных продаж
            </h2>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Перестаньте действовать наугад и соберите систему, которая будет работать на вас весь год.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12 py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
              onClick={() => window.open('https://t.me/', '_blank')}
            >
              Хочу на трекинг
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-12 py-7 text-xl font-bold"
              onClick={() => window.open('https://t.me/', '_blank')}
            >
              Тест-драйв
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-12 py-7 text-xl font-bold"
              onClick={() => window.open('https://t.me/', '_blank')}
            >
              Бронь места
            </Button>
          </div>

          <p className="text-white/90 text-base pt-4">
            Ответим на все вопросы и подберём подходящую программу
          </p>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2026 Светлана Скорнякова. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
