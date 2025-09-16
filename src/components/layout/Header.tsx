import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  currentPage?: string;
}

const Header = ({ currentPage = 'home' }: HeaderProps) => {
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

  const navigationItems = [
    { name: 'Главная', path: '/', icon: 'Home', key: 'home' },
    { name: 'Поиск', path: '/search', icon: 'Search', key: 'search' },
    { name: 'Магазин', path: '/store', icon: 'ShoppingBag', key: 'store' },
    { name: 'Для разработчиков', path: '/developers', icon: 'Code', key: 'developers' }
  ];

  return (
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

            <a href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gaming Library
            </a>
            <nav className="hidden lg:flex space-x-6">
              {navigationItems.map((item) => (
                <a 
                  key={item.key}
                  href={item.path} 
                  className={`transition-colors ${
                    currentPage === item.key 
                      ? 'text-primary font-medium' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </a>
              ))}
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
                    {navigationItems.map((item) => (
                      <a 
                        key={item.key}
                        href={item.path} 
                        className={`block px-3 py-2 rounded-lg transition-colors ${
                          currentPage === item.key
                            ? 'text-primary bg-primary/10 font-medium'
                            : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                        }`}
                      >
                        <Icon name={item.icon as any} size={18} className="inline mr-3" />
                        {item.name}
                      </a>
                    ))}
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
  );
};

export default Header;