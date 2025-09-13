import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', avatar: '' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 dark:from-background dark:to-muted/10">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 md:space-x-8">
              {/* Settings Button */}
              <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full p-2 h-10 w-10">
                    <Icon name="Settings" size={20} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md w-[95vw] max-w-[425px] mx-4 sm:mx-auto rounded-2xl">
                  <DialogHeader>
                    <DialogTitle>Настройки</DialogTitle>
                    <DialogDescription>
                      Настройте параметры приложения под себя
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 mt-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="dark-mode" className="text-sm font-medium">
                          Тёмная тема
                        </Label>
                        <Switch
                          id="dark-mode"
                          checked={darkMode}
                          onCheckedChange={setDarkMode}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notifications" className="text-sm font-medium">
                          Push-уведомления
                        </Label>
                        <Switch
                          id="notifications"
                          checked={notifications}
                          onCheckedChange={setNotifications}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-updates" className="text-sm font-medium">
                          Email-рассылка
                        </Label>
                        <Switch
                          id="email-updates"
                          checked={emailUpdates}
                          onCheckedChange={setEmailUpdates}
                        />
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium">Дополнительно</h4>
                      <div className="space-y-2">
                        <Button variant="ghost" className="w-full justify-start rounded-full">
                          <Icon name="Shield" size={16} className="mr-2" />
                          Приватность
                        </Button>
                        <Button variant="ghost" className="w-full justify-start rounded-full">
                          <Icon name="HelpCircle" size={16} className="mr-2" />
                          Помощь
                        </Button>
                        <Button variant="ghost" className="w-full justify-start rounded-full">
                          <Icon name="FileText" size={16} className="mr-2" />
                          Условия использования
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gaming Library
              </h1>
              <nav className="hidden lg:flex space-x-6">
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
                <a href="/search" className="text-muted-foreground hover:text-primary transition-colors">Поиск</a>
                <a href="/store" className="text-muted-foreground hover:text-primary transition-colors">Магазин</a>
                <a href="/developers" className="text-muted-foreground hover:text-primary transition-colors">Для разработчиков</a>
              </nav>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden rounded-full">
                    <Icon name="Menu" size={20} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                  <SheetHeader>
                    <SheetTitle>Навигация</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    <nav className="space-y-2">
                      <a href="/" className="block px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors">
                        <Icon name="Home" size={18} className="inline mr-3" />
                        Главная
                      </a>
                      <a href="/search" className="block px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors">
                        <Icon name="Search" size={18} className="inline mr-3" />
                        Поиск
                      </a>
                      <a href="/store" className="block px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors">
                        <Icon name="ShoppingBag" size={18} className="inline mr-3" />
                        Магазин
                      </a>
                      <a href="/developers" className="block px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors">
                        <Icon name="Code" size={18} className="inline mr-3" />
                        Для разработчиков
                      </a>
                    </nav>
                    <Separator />
                    {isLoggedIn ? (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3 px-3 py-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          className="w-full justify-start px-3"
                          onClick={() => setIsLoggedIn(false)}
                        >
                          <Icon name="LogOut" size={16} className="mr-2" />
                          Выйти
                        </Button>
                      </div>
                    ) : (
                      <Button
                        className="w-full"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsLoginOpen(true);
                        }}
                      >
                        <Icon name="User" size={16} className="mr-2" />
                        Войти
                      </Button>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              {/* Login/Profile Button */}
              {isLoggedIn ? (
                <div className="hidden lg:flex items-center space-x-3">
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <Button
                    variant="ghost"
                    onClick={() => setIsLoggedIn(false)}
                    className="text-sm"
                  >
                    Выйти
                  </Button>
                </div>
              ) : (
                <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="hidden lg:flex rounded-full">
                      <Icon name="User" size={16} className="mr-2" />
                      Войти
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md w-[95vw] max-w-[425px] mx-4 sm:mx-auto rounded-2xl">
                    <DialogHeader>
                      <DialogTitle>
                        {isRegistering ? 'Создать аккаунт' : 'Войти в аккаунт'}
                      </DialogTitle>
                      <DialogDescription>
                        {isRegistering 
                          ? 'Заполните данные для создания нового аккаунта'
                          : 'Войдите в существующий аккаунт или создайте новый'
                        }
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="space-y-3">
                        {isRegistering && (
                          <div className="space-y-2">
                            <Label htmlFor="name">Имя</Label>
                            <Input id="name" type="text" placeholder="Ваше имя" />
                          </div>
                        )}
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Ваш email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Пароль</Label>
                          <Input id="password" type="password" placeholder="Ваш пароль" />
                        </div>
                        {isRegistering && (
                          <div className="space-y-2">
                            <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                            <Input id="confirm-password" type="password" placeholder="Повторите пароль" />
                          </div>
                        )}
                        <Button 
                          className="w-full rounded-full"
                          onClick={() => {
                            setUser({ name: 'Игрок', email: 'player@example.com', avatar: '' });
                            setIsLoggedIn(true);
                            setIsLoginOpen(false);
                          }}
                        >
                          {isRegistering ? 'Создать аккаунт' : 'Войти'}
                        </Button>
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
                      <div className="text-center">
                        <Button
                          variant="link"
                          className="text-sm"
                          onClick={() => setIsRegistering(!isRegistering)}
                        >
                          {isRegistering 
                            ? 'Уже есть аккаунт? Войдите'
                            : 'Нет аккаунта? Зарегистрируйтесь'
                          }
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Откройте мир{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              игровых проектов
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            Платформа для разработчиков и игроков. Размещайте свои игры, демо-версии и ассеты. Находите уникальные проекты.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative px-4">
            <div className="relative">
              <Icon name="Search" size={18} className="absolute left-6 md:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Найти игры, ассеты, разработчиков..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 md:pl-12 pr-20 md:pr-24 py-3 md:py-3 text-base md:text-lg rounded-full border-2 focus:border-primary"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-4 md:px-6 text-sm md:text-base">
                <span className="hidden sm:inline">Найти</span>
                <Icon name="Search" size={16} className="sm:hidden" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <Tabs defaultValue="games" className="w-full">
          <TabsList className="grid w-full max-w-xs sm:max-w-md mx-auto grid-cols-4 rounded-full p-1 bg-muted/50 text-xs sm:text-sm">
            <TabsTrigger value="games" className="rounded-full px-2 sm:px-4">Игры</TabsTrigger>
            <TabsTrigger value="demos" className="rounded-full px-2 sm:px-4">Демо</TabsTrigger>
            <TabsTrigger value="assets" className="rounded-full px-2 sm:px-4">Ассеты</TabsTrigger>
            <TabsTrigger value="tools" className="rounded-full px-1 sm:px-4">
              <span className="hidden sm:inline">Инструменты</span>
              <span className="sm:hidden">Утилиты</span>
            </TabsTrigger>
          </TabsList>

          <div className="mt-6 md:mt-8">
            <TabsContent value="games" className="space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-semibold">Рекомендуемые игры</h3>
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  <Button variant="outline" size="sm" className="rounded-full flex-shrink-0">
                    <Icon name="TrendingUp" size={14} className="mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Популярные</span>
                    <span className="sm:hidden">Топ</span>
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full flex-shrink-0">
                    <Icon name="Clock" size={14} className="mr-1 sm:mr-2" />
                    Новые
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full flex-shrink-0">
                    <Icon name="Star" size={14} className="mr-1 sm:mr-2" />
                    Лучшие
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {featuredGames.map((game) => (
                  <Card key={game.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm touch-manipulation">
                    <div className="relative">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-40 sm:h-44 md:h-48 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                        <Badge variant="secondary" className="bg-card/90 text-xs">
                          {game.price}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-6">
                      <div className="flex items-start justify-between">
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-base sm:text-lg truncate">{game.title}</CardTitle>
                          <CardDescription className="text-xs sm:text-sm text-muted-foreground mt-1 truncate">
                            от {game.developer}
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-1 ml-2">
                          <Icon name="Star" size={12} className="fill-yellow-400 text-yellow-400" />
                          <span className="text-xs sm:text-sm font-medium">{game.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 px-3 sm:px-6">
                      <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                        {game.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs rounded-full px-2 py-0">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1 rounded-full text-xs sm:text-sm h-8 sm:h-9">
                          <Icon name="Play" size={12} className="mr-1 sm:mr-2" />
                          Играть
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full h-8 sm:h-9 w-8 sm:w-9 p-0">
                          <Icon name="Heart" size={12} />
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full h-8 sm:h-9 w-8 sm:w-9 p-0">
                          <Icon name="Share2" size={12} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="demos" className="space-y-6">
              <div className="text-center py-8 sm:py-12">
                <Icon name="Gamepad2" size={48} className="sm:hidden mx-auto text-muted-foreground mb-4" />
                <Icon name="Gamepad2" size={64} className="hidden sm:block mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Демо-версии</h3>
                <p className="text-sm sm:text-base text-muted-foreground px-4">Попробуйте игры перед покупкой</p>
              </div>
            </TabsContent>

            <TabsContent value="assets" className="space-y-6">
              <div className="text-center py-8 sm:py-12">
                <Icon name="Package" size={48} className="sm:hidden mx-auto text-muted-foreground mb-4" />
                <Icon name="Package" size={64} className="hidden sm:block mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Игровые ассеты</h3>
                <p className="text-sm sm:text-base text-muted-foreground px-4">Спрайты, звуки, модели и другие ресурсы</p>
              </div>
            </TabsContent>

            <TabsContent value="tools" className="space-y-6">
              <div className="text-center py-8 sm:py-12">
                <Icon name="Settings" size={48} className="sm:hidden mx-auto text-muted-foreground mb-4" />
                <Icon name="Settings" size={64} className="hidden sm:block mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Инструменты разработки</h3>
                <p className="text-sm sm:text-base text-muted-foreground px-4">Редакторы, движки и утилиты</p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </section>

      {/* Developer Section */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-12 md:py-16 mt-12 md:mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Для разработчиков</h3>
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Загружайте свои проекты, получайте отзывы от сообщества и монетизируйте свою работу
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <Button size="lg" className="rounded-full px-6 sm:px-8 text-sm sm:text-base">
              <Icon name="Upload" size={18} className="mr-2" />
              Загрузить проект
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-6 sm:px-8 text-sm sm:text-base">
              <Icon name="BookOpen" size={18} className="mr-2" />
              Руководство
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8 sm:py-12 mt-12 md:mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-2 sm:col-span-1 md:col-span-1">
              <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gaming Library
              </h4>
              <p className="text-muted-foreground text-sm md:text-base">
                Платформа для игровых проектов и сообщества разработчиков.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Платформа</h5>
              <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                <li><a href="/search" className="hover:text-primary transition-colors">Поиск игр</a></li>
                <li><a href="/store" className="hover:text-primary transition-colors">Магазин</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Рейтинги</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Разработчикам</h5>
              <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                <li><a href="/developers" className="hover:text-primary transition-colors">Загрузить игру</a></li>
                <li><a href="/developers" className="hover:text-primary transition-colors">Аналитика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Поддержка</h5>
              <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сообщество</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-6 md:mt-8 pt-6 md:pt-8 text-center text-muted-foreground">
            <p className="text-sm md:text-base">&copy; 2024 Gaming Library. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;