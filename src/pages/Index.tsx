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
    },
    {
      id: 6,
      image: "https://cdn.poehali.dev/files/Zulfiya-Nastavnik-mentor-dlya-ekspertov.png",
      name: "Зульфия",
      role: "Наставник, ментор для экспертов",
      result: "858.000 руб. за 2 месяца"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="mb-4">
            <div className="inline-block border-4 border-[#F5C83A] bg-gradient-to-r from-[#F5C83A]/20 to-[#F5C83A]/30 rounded-2xl px-6 py-2 shadow-lg animate-pulse">
              <p className="text-xl md:text-2xl font-bold text-[#9A1E15]">🎁 Эксклюзивное предложение!</p>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-[#9A1E15]">90-дневный трекинг продаж</span><br />
              для экспертов и предпринимателей
            </h1>
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed font-medium">
              Совместная работа над вашим проектом, где мы пересобираем или запускаем продажи под реалии 2026 года 
              и доводим 1-2 целевых действия до заявок и денег.
            </p>
            <p className="text-lg md:text-xl text-[#9A1E15] max-w-3xl mx-auto font-bold">
              Старт программы 12 января. Осталось 2 свободных места.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://t.me/m/Ax9hlnZWM2Zi', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Хочу на трекинг
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-10 py-7 text-lg font-bold animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://t.me/m/9UrM7yc3NTRi', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Узнать подробности
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 max-w-5xl mx-auto">
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

      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Что мы делаем на <span className="text-primary">трекинге</span>
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
                  Стратегия, решения и фокус под ваш опыт, нишу и цели.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('https://t.me/m/Ax9hlnZWM2Zi', '_blank')}
            >
              Хочу на трекинг
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-10 py-7 text-lg font-bold"
              onClick={() => window.open('https://t.me/m/9UrM7yc3NTRi', '_blank')}
            >
              Узнать подробности
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              С какими запросами приходят на <span className="text-primary">трекинг</span>
            </h2>
          </div>

          <Card className="border-4 border-[#9A1E15] shadow-2xl bg-gradient-to-br from-[#9A1E15]/10 to-white">
            <CardContent className="pt-8 space-y-6">
              <p className="text-xl font-semibold text-[#9A1E15]">
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
                    <div className="w-6 h-6 bg-[#9A1E15] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
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

      <section id="format" className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
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

      <section className="py-6 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('https://t.me/m/Ax9hlnZWM2Zi', '_blank')}
            >
              Хочу на трекинг
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-10 py-7 text-lg font-bold"
              onClick={() => window.open('https://t.me/m/9UrM7yc3NTRi', '_blank')}
            >
              Узнать подробности
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Что вы получаете за <span className="text-primary">90 дней</span>
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

      <section className="py-4 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://t.me/m/Ax9hlnZWM2Zi', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Хочу на трекинг
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-10 py-7 text-lg font-bold animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://t.me/m/9UrM7yc3NTRi', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Узнать подробности
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <img 
                src="https://cdn.poehali.dev/files/telegram-cloud-photo-size-4-5874222278663408774-y 2.png" 
                alt="Светлана Скорнякова"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-2 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary text-left">
                Светлана Скорнякова
              </h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed text-left">
                <p>— более 100 экспертов вышли на доход 300.000 ₽+</p>
                <p>— средний рост дохода за 90 дней — x2–x4</p>
                <p>— заработала 15+ млн ₽ в Telegram за 2 года</p>
                <p>— инвестировала в своё развитие более 2 млн ₽</p>
                <p>— работаю с мягкими и твёрдыми нишами: психологи, коучи, наставники, эксперты услуг</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-8 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Реальные <span className="text-primary">результаты</span> клиентов
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      <section className="py-8 px-4 bg-gradient-to-br from-[#9A1E15]/10 to-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-4 border-[#9A1E15] shadow-2xl bg-gradient-to-br from-[#F5C83A]/20 to-white">
            <CardContent className="pt-8 space-y-6 text-center">
              <div className="space-y-4">
                <p className="text-3xl md:text-4xl font-bold text-[#9A1E15]">
                  🔥 Осталось 2 места
                </p>
                <div className="inline-block bg-white rounded-xl px-8 py-4 shadow-lg">
                  <p className="text-2xl md:text-3xl font-bold text-[#9A1E15]">
                    СТОИМОСТЬ 49.900 ₽
                  </p>
                  <p className="text-xl text-gray-500 line-through mt-2">
                    вместо 69.900 ₽
                  </p>
                </div>
                <p className="text-xl md:text-2xl font-bold text-[#9A1E15]">
                  📅 Старт программы - 12 января
                </p>
              </div>
              
              <div className="flex justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-[#9A1E15] hover:bg-[#9A1E15]/90 text-white px-12 py-7 text-xl font-bold shadow-lg hover:shadow-xl transition-all animate-pulse flex items-center gap-2"
                  onClick={() => window.open('https://t.me/m/Ax9hlnZWM2Zi', '_blank')}
                >
                  <Icon name="Hand" size={24} />
                  Хочу на трекинг
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mb-6">
            <div className="inline-block border-4 border-[#F5C83A] bg-white rounded-2xl px-8 py-3 shadow-xl">
              <p className="text-2xl md:text-3xl font-bold text-[#9A1E15]">Специальное предложение!</p>
            </div>
          </div>
          
          <Card className="border-4 border-[#F5C83A] shadow-2xl bg-white">
            <CardContent className="pt-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#9A1E15] text-center">
                ТЕСТ-ДРАЙВ ТРЕКИНГА
              </h2>
              
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>
                  В течение 21 дня мы работаем с вашим проектом:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>— я помогаю разобрать текущую ситуацию в продажах,</li>
                  <li>— определить ключевые действия,</li>
                  <li>— убрать лишнее и сфокусироваться на шагах, которые быстрее всего приводят к заявкам и деньгам именно в вашем проекте.</li>
                </ul>
                
                <p className="font-bold">
                  Вы получаете полноценное сопровождение на 21 день, мою обратную связь и понимание, как выстраивается система продаж под ваши цели и текущие реалии.
                </p>
                
                <p>
                  Это позволяет без лишних рисков понять, подходит ли вам формат трекинга и готовы ли вы идти дальше в основную программу.
                </p>
                
                <p className="text-2xl font-bold text-[#9A1E15] text-center pt-4">
                  Стоимость ТЕСТ-ДРАЙВА 10.000 руб.
                </p>
              </div>
              
              <div className="flex justify-center pt-6">
                <Button 
                  size="lg" 
                  className="bg-[#F5C83A] hover:bg-[#F5C83A]/90 text-black px-12 py-7 text-xl font-bold shadow-lg hover:shadow-xl transition-all animate-pulse flex items-center gap-2"
                  onClick={() => window.open('https://t.me/m/xinPDaoNNDYy', '_blank')}
                >
                  <Icon name="Hand" size={24} />
                  Хочу тест-драйв
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
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
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-8 px-4 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Начните 2026 год с продаж!
            </h2>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Перестаньте действовать наугад и соберите систему, которая будет работать на вас весь год.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="bg-[#F5C83A] hover:bg-[#F5C83A]/90 text-black px-12 py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://t.me/m/Ax9hlnZWM2Zi', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Хочу на трекинг
            </Button>
            
            <Button 
              size="lg"
              className="bg-[#F5C83A] hover:bg-[#F5C83A]/90 text-black px-12 py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://t.me/m/xinPDaoNNDYy', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Тест-драйв
            </Button>
            
            <Button 
              size="lg"
              className="bg-[#F5C83A] hover:bg-[#F5C83A]/90 text-black px-12 py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://t.me/m/KOA-jbpiMDVi', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Бронь места
            </Button>
          </div>
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