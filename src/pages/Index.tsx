import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-secondary">
                Винком-инжиниринг
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#main"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Главная
              </a>
              <a
                href="#solutions"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Решения
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                О компании
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Услуги
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="main"
        className="bg-gradient-to-r from-secondary to-secondary/90 text-white py-20"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Комплексные решения для промышленности
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Поставка промышленного оборудования любой сложности.
              Профессиональная интеграция и техническая поддержка
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-secondary"
              >
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Наши решения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Широкий спектр промышленного оборудования для различных отраслей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Server"
                  className="h-12 w-12 text-primary mx-auto mb-4"
                />
                <CardTitle className="text-xl">
                  Серверное оборудование
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Высокопроизводительные серверы, системы хранения данных и
                  сетевое оборудование
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Cpu"
                  className="h-12 w-12 text-primary mx-auto mb-4"
                />
                <CardTitle className="text-xl">
                  Промышленная автоматика
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Системы управления, контроллеры, датчики и исполнительные
                  устройства
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Settings"
                  className="h-12 w-12 text-primary mx-auto mb-4"
                />
                <CardTitle className="text-xl">
                  Технологическое оборудование
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Специализированное оборудование для производственных процессов
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">
                О компании
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Винком-инжиниринг — ведущий системный интегратор с многолетним
                опытом работы в области поставки и внедрения промышленного
                оборудования. Мы специализируемся на комплексных решениях для
                предприятий различных отраслей.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Более 15 лет на рынке</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">
                    Свыше 500 успешных проектов
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">
                    Сертифицированные специалисты
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="text-center">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      500+
                    </div>
                    <div className="text-gray-600">Проектов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      15+
                    </div>
                    <div className="text-gray-600">Лет опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      50+
                    </div>
                    <div className="text-gray-600">Партнеров</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      24/7
                    </div>
                    <div className="text-gray-600">Поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Услуги</h2>
            <p className="text-xl text-gray-600">
              Полный цикл работ от проектирования до запуска в эксплуатацию
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon name="FileText" className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Проектирование
              </h3>
              <p className="text-gray-600 text-sm">
                Разработка технических решений под ваши задачи
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon name="Truck" className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Поставка
              </h3>
              <p className="text-gray-600 text-sm">
                Комплексная поставка оборудования от ведущих производителей
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon name="Wrench" className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Монтаж
              </h3>
              <p className="text-gray-600 text-sm">
                Профессиональный монтаж и пусконаладочные работы
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon
                name="HeadphonesIcon"
                className="h-8 w-8 text-primary mb-4"
              />
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Сервис
              </h3>
              <p className="text-gray-600 text-sm">
                Техническая поддержка и сервисное обслуживание
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary">Адрес</h3>
                    <p className="text-gray-600">
                      г. Москва, ул. Промышленная, д. 15, стр. 2
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon name="Phone" className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon name="Mail" className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary">Email</h3>
                    <p className="text-gray-600">info@vincom-engineering.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon name="Clock" className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary">
                      Время работы
                    </h3>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Получить консультацию
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <textarea
                  placeholder="Сообщение"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Винком-инжиниринг</span>
              </div>
              <p className="text-gray-300">
                Ведущий поставщик промышленного оборудования и комплексных
                решений для бизнеса
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Проектирование
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Поставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Монтаж
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Сервис
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Решения</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Серверное оборудование
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Промышленная автоматика
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Технологическое оборудование
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+7 (495) 123-45-67</li>
                <li>info@vincom-engineering.ru</li>
                <li>г. Москва, ул. Промышленная, д. 15</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Винком-инжиниринг. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
