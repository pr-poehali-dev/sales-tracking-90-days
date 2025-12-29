import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

  const faqItems = [
    {
      question: "Что такое трекинг и как он работает?",
      answer: "Трекинг — это система наставничества и поддержки в развитии вашего бизнеса. Мы помогаем выстроить воронки продаж, автоматизировать процессы и увеличить доход."
    },
    {
      question: "Сколько длится трекинг?",
      answer: "Стандартная программа трекинга длится от 1 до 3 месяцев, в зависимости от ваших целей и выбранного тарифа."
    },
    {
      question: "Какие результаты я получу?",
      answer: "Вы получите рабочие инструменты для привлечения клиентов, увеличения продаж и автоматизации процессов. Конкретные цифры зависят от вашей ниши и вовлеченности."
    },
    {
      question: "Нужен ли опыт в продажах?",
      answer: "Нет, опыт не обязателен. Мы работаем как с новичками, так и с опытными специалистами, адаптируя программу под ваш уровень."
    },
    {
      question: "Как проходит работа?",
      answer: "Работа проходит онлайн через Telegram и Zoom. Вы получаете персональную поддержку, еженедельные созвоны и доступ к материалам."
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Трекинги для<br />
              <span className="text-primary">роста вашего бизнеса</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Персональное сопровождение экспертов по продажам и маркетингу
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToContact}
            >
              Записаться на трекинг
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold"
              onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть кейсы
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary">300k+</h3>
                <p className="text-muted-foreground">Средний результат</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-secondary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary">50+</h3>
                <p className="text-muted-foreground">Успешных клиентов</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary">1-3</h3>
                <p className="text-muted-foreground">Месяца работы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Что вы получите на <span className="text-primary">трекинге</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полное сопровождение от выстраивания стратегии до получения первых результатов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="LineChart" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Воронка продаж</h3>
                <p className="text-muted-foreground">
                  Выстроим эффективную воронку с лид-магнитами и автоматизацией для постоянного потока клиентов
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Icon name="MessageSquare" className="text-secondary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Система касаний</h3>
                <p className="text-muted-foreground">
                  Настроим автоматические касания в Telegram и других каналах для прогрева аудитории
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Быстрый запуск</h3>
                <p className="text-muted-foreground">
                  Первые результаты уже через 2-4 недели работы: заявки, продажи и рост дохода
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Icon name="Headphones" className="text-secondary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Персональная поддержка</h3>
                <p className="text-muted-foreground">
                  Еженедельные созвоны, разбор вашей ниши и ответы на все вопросы в чате 24/7
                </p>
              </CardContent>
            </Card>
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
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Часто задаваемые <span className="text-primary">вопросы</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border rounded-lg px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Готовы увеличить свой доход?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Запишитесь на консультацию и узнайте, как трекинг поможет вашему бизнесу
            </p>
          </div>

          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12 py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
            onClick={() => window.open('https://t.me/', '_blank')}
          >
            <Icon name="Send" className="mr-3" size={24} />
            Написать в Telegram
          </Button>

          <p className="text-white/80 text-sm">
            Ответим на все вопросы и подберём подходящую программу
          </p>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2024 Трекинги. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
