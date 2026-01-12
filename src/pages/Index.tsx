import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const fractions = [
    {
      size: "0.5-1 мм",
      title: "Мелкая фракция",
      description: "Идеально для тонкой очистки, полировки деликатных поверхностей",
      applications: ["Пескоструйная обработка", "Полировка металла", "Очистка камня"],
      color: "from-amber-50 to-amber-100"
    },
    {
      size: "1-2 мм",
      title: "Средняя фракция",
      description: "Универсальное решение для большинства промышленных задач",
      applications: ["Очистка металлоконструкций", "Удаление ржавчины", "Подготовка поверхностей"],
      color: "from-orange-50 to-orange-100"
    },
    {
      size: "2-3 мм",
      title: "Крупная фракция",
      description: "Для интенсивной обработки и удаления толстых слоев покрытий",
      applications: ["Тяжелая очистка", "Снятие краски", "Обработка бетона"],
      color: "from-red-50 to-red-100"
    }
  ];

  const benefits = [
    {
      icon: "Leaf",
      title: "100% Экологичность",
      description: "Натуральный продукт из скорлупы грецкого ореха без химических добавок"
    },
    {
      icon: "Zap",
      title: "Высокая эффективность",
      description: "Твердость и форма частиц обеспечивают быструю и качественную обработку"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Не повреждает обрабатываемую поверхность, не содержит вредных веществ"
    },
    {
      icon: "Recycle",
      title: "Возможность повторного использования",
      description: "Абразив можно использовать многократно, что снижает затраты"
    },
    {
      icon: "Droplets",
      title: "Низкая пыльность",
      description: "Минимальное пылеобразование при работе улучшает условия труда"
    },
    {
      icon: "TrendingDown",
      title: "Экономия",
      description: "Оптимальное соотношение цены и качества, долгий срок службы"
    }
  ];

  const applications = [
    {
      icon: "Factory",
      title: "Промышленная очистка",
      description: "Очистка металлоконструкций, оборудования, резервуаров от ржавчины и старых покрытий"
    },
    {
      icon: "Hammer",
      title: "Строительство",
      description: "Подготовка поверхностей перед покраской, очистка бетона и камня"
    },
    {
      icon: "Cpu",
      title: "Авиация и судостроение",
      description: "Деликатная очистка композитных материалов и сложных конструкций"
    },
    {
      icon: "Gem",
      title: "Декоративная обработка",
      description: "Создание матовых поверхностей, гравировка по стеклу и камню"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <span className="font-heading font-bold text-xl text-primary">EcoShell</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#fractions" className="text-foreground hover:text-primary transition-colors font-medium">Фракции</a>
            <a href="#applications" className="text-foreground hover:text-primary transition-colors font-medium">Применение</a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors font-medium">Преимущества</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button className="hidden md:block">Получить консультацию</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-background via-amber-50/30 to-green-50/30 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzhCNDUxMyIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
                <Icon name="Leaf" size={20} />
                <span className="text-sm font-semibold">Экологичный продукт</span>
              </div>
              <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 text-foreground leading-tight">
                Абразив из скорлупы грецкого ореха
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Натуральный, эффективный и безопасный материал для промышленной очистки и обработки поверхностей
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Прайс-лист
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/98a9d4f9-3a39-4379-a6aa-a8ccd1224508/files/c1eed6d1-bce5-443b-a6a9-37fe22ce1e48.jpg"
                alt="Абразив из скорлупы грецкого ореха"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="fractions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">Доступные фракции</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Подберите оптимальный размер абразива под ваши задачи
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {fractions.map((fraction, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${fraction.color}`}></div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-heading font-bold text-primary">{fraction.size}</span>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="CircleDot" size={28} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">{fraction.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{fraction.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-primary mb-2">Применение:</p>
                    {fraction.applications.map((app, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/98a9d4f9-3a39-4379-a6aa-a8ccd1224508/files/ea73a4ef-c037-48d0-8904-f73d6394baed.jpg"
              alt="Различные фракции абразива"
              className="rounded-2xl shadow-xl mx-auto max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      <section id="applications" className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">Области применения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий спектр использования в различных отраслях промышленности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={app.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{app.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground">Почему выбирают нас?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Абразив из скорлупы грецкого ореха — это инновационное решение, которое сочетает экологичность природных материалов с высокой эффективностью промышленной обработки
              </p>
              <img 
                src="https://cdn.poehali.dev/projects/98a9d4f9-3a39-4379-a6aa-a8ccd1224508/files/ee965597-1954-4263-ae88-b08f96fcb065.jpg"
                alt="Экологичное производство"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 border-2"
                >
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={benefit.icon as any} size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-heading font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Довольных клиентов</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-heading font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Лет на рынке</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-heading font-bold mb-2">100%</div>
              <div className="text-primary-foreground/80">Экологичность</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl font-heading font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Получите консультацию и индивидуальное коммерческое предложение
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-2xl mb-6 text-foreground">Форма заказа</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Ваше имя</label>
                    <Input placeholder="Иван Иванов" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Email</label>
                    <Input type="email" placeholder="info@example.com" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Комментарий</label>
                    <Textarea placeholder="Укажите интересующую фракцию и объем..." rows={4} />
                  </div>
                  <Button className="w-full h-12 text-lg shadow-lg hover:shadow-xl transition-shadow">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-2xl mb-6 text-foreground">Упаковка и объемы</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Package" size={24} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Мешки 25-50 кг</p>
                        <p className="text-sm text-muted-foreground">Удобная фасовка для небольших объемов работ</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Container" size={24} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Биг-бэги 500-1000 кг</p>
                        <p className="text-sm text-muted-foreground">Оптимально для промышленных масштабов</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Truck" size={24} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Насыпом (от 20 тонн)</p>
                        <p className="text-sm text-muted-foreground">Максимальная экономия для крупных заказов</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-primary to-secondary text-white">
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-2xl mb-6">Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={24} />
                      <div>
                        <p className="text-sm opacity-90">Телефон</p>
                        <p className="font-semibold text-lg">+7 (999) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" size={24} />
                      <div>
                        <p className="text-sm opacity-90">Email</p>
                        <p className="font-semibold text-lg">info@ecoshell.ru</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" size={24} />
                      <div>
                        <p className="text-sm opacity-90">Адрес</p>
                        <p className="font-semibold text-lg">г. Москва, ул. Промышленная, 15</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={24} />
                </div>
                <span className="font-heading font-bold text-xl">EcoShell</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Экологичные абразивные материалы для промышленности
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-secondary transition-colors">Мелкая фракция</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Средняя фракция</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Крупная фракция</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Индивидуальный заказ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-secondary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-secondary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Консультация</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>&copy; 2024 EcoShell. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
