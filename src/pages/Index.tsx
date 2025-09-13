import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const featuredGames = [
    {
      id: 1,
      title: "Pixel Adventure",
      developer: "IndieDev Studio",
      image: "/img/7d763086-73b4-44ef-9030-87634134c49c.jpg",
      tags: ["Платформер", "Пиксель-арт", "Приключения"],
      price: "Бесплатно",
      rating: 4.8
    },
    {
      id: 2,
      title: "Space Defender",
      developer: "Cosmic Games",
      image: "/img/f571c278-7833-4bbe-9c6d-bc3f55452e78.jpg",
      tags: ["Экшен", "Космос", "Шутер"],
      price: "299₽",
      rating: 4.5
    },
    {
      id: 3,
      title: "UI Asset Pack",
      developer: "Design Pro",
      image: "/img/8d3c80fc-aa1f-4103-ad16-bb354511a936.jpg",
      tags: ["Ассеты", "UI", "Дизайн"],
      price: "599₽",
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gaming Library
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Поиск</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Магазин</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Для разработчиков</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="rounded-full">
                    <Icon name="User" size={16} className="mr-2" />
                    Войти
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Войти в аккаунт</DialogTitle>
                    <DialogDescription>
                      Выберите способ входа в вашу учётную запись
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Input type="email" placeholder="Email" />
                      <Input type="password" placeholder="Пароль" />
                      <Button className="w-full rounded-full">Войти</Button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">или</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full rounded-full">
                        <Icon name="Mail" size={16} className="mr-2" />
                        Google
                      </Button>
                      <Button variant="outline" className="w-full rounded-full">
                        <Icon name="Github" size={16} className="mr-2" />
                        GitHub
                      </Button>
                      <Button variant="outline" className="w-full rounded-full">
                        <Icon name="Gamepad2" size={16} className="mr-2" />
                        Steam
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Откройте мир{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              игровых проектов
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Платформа для разработчиков и игроков. Размещайте свои игры, демо-версии и ассеты. Находите уникальные проекты.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Найти игры, ассеты, разработчиков..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg rounded-full border-2 focus:border-primary"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6">
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="container mx-auto px-4 py-8">
        <Tabs defaultValue="games" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 rounded-full p-1 bg-gray-100">
            <TabsTrigger value="games" className="rounded-full">Игры</TabsTrigger>
            <TabsTrigger value="demos" className="rounded-full">Демо</TabsTrigger>
            <TabsTrigger value="assets" className="rounded-full">Ассеты</TabsTrigger>
            <TabsTrigger value="tools" className="rounded-full">Инструменты</TabsTrigger>
          </TabsList>

          <div className="mt-8">
            <TabsContent value="games" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">Рекомендуемые игры</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Icon name="TrendingUp" size={16} className="mr-2" />
                    Популярные
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Icon name="Clock" size={16} className="mr-2" />
                    Новые
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Icon name="Star" size={16} className="mr-2" />
                    Лучшие
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredGames.map((game) => (
                  <Card key={game.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/50 backdrop-blur-sm">
                    <div className="relative">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          {game.price}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{game.title}</CardTitle>
                          <CardDescription className="text-sm text-gray-600 mt-1">
                            от {game.developer}
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{game.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1 mb-4">
                        {game.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs rounded-full">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1 rounded-full" size="sm">
                          <Icon name="Play" size={14} className="mr-2" />
                          Играть
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full">
                          <Icon name="Heart" size={14} />
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full">
                          <Icon name="Share2" size={14} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="demos" className="space-y-6">
              <div className="text-center py-12">
                <Icon name="Gamepad2" size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Демо-версии</h3>
                <p className="text-gray-600">Попробуйте игры перед покупкой</p>
              </div>
            </TabsContent>

            <TabsContent value="assets" className="space-y-6">
              <div className="text-center py-12">
                <Icon name="Package" size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Игровые ассеты</h3>
                <p className="text-gray-600">Спрайты, звуки, модели и другие ресурсы</p>
              </div>
            </TabsContent>

            <TabsContent value="tools" className="space-y-6">
              <div className="text-center py-12">
                <Icon name="Settings" size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Инструменты разработки</h3>
                <p className="text-gray-600">Редакторы, движки и утилиты</p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </section>

      {/* Developer Section */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Для разработчиков</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Загружайте свои проекты, получайте отзывы от сообщества и монетизируйте свою работу
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="rounded-full px-8">
              <Icon name="Upload" size={20} className="mr-2" />
              Загрузить проект
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Руководство
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gaming Library
              </h4>
              <p className="text-gray-400">
                Платформа для игровых проектов и сообщества разработчиков.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Платформа</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Поиск игр</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Магазин</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Рейтинги</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Разработчикам</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Загрузить игру</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аналитика</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сообщество</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Gaming Library. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;