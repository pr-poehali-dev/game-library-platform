import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/layout/Header';
import Icon from '@/components/ui/icon';

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const featuredItems = [
    {
      id: 1,
      title: "Cyber Punk 2099",
      developer: "Future Games",
      image: "/img/7d763086-73b4-44ef-9030-87634134c49c.jpg",
      tags: ["Киберпанк", "RPG", "Открытый мир"],
      price: "2999₽",
      originalPrice: "3999₽",
      discount: 25,
      rating: 4.8,
      featured: true,
      type: "game"
    },
    {
      id: 2,
      title: "Fantasy UI Complete",
      developer: "Art Studio Pro",
      image: "/img/f571c278-7833-4bbe-9c6d-bc3f55452e78.jpg",
      tags: ["UI", "Фэнтези", "Комплект"],
      price: "1499₽",
      originalPrice: "1999₽",
      discount: 25,
      rating: 4.9,
      featured: true,
      type: "assets"
    },
    {
      id: 3,
      title: "Game Maker Studio",
      developer: "DevTools Inc",
      image: "/img/8d3c80fc-aa1f-4103-ad16-bb354511a936.jpg",
      tags: ["Редактор", "2D", "Инструменты"],
      price: "4999₽",
      originalPrice: "6999₽",
      discount: 29,
      rating: 4.7,
      featured: true,
      type: "tools"
    }
  ];

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Grid3X3', count: 1234 },
    { id: 'games', name: 'Игры', icon: 'Gamepad2', count: 456 },
    { id: 'assets', name: 'Ассеты', icon: 'Package', count: 567 },
    { id: 'tools', name: 'Инструменты', icon: 'Settings', count: 211 }
  ];

  const weeklyDeals = [
    { title: "Indie Bundle", originalPrice: "2999₽", price: "999₽", discount: 67 },
    { title: "Asset Pack Pro", originalPrice: "1999₽", price: "1199₽", discount: 40 },
    { title: "Sound Library", originalPrice: "799₽", price: "399₽", discount: 50 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 dark:from-background dark:to-muted/10">
      <Header currentPage="store" />
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Store Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Магазин Gaming Library</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Купите лучшие игры, ассеты и инструменты для разработки. Эксклюзивные предложения и скидки каждую неделю.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                selectedCategory === category.id ? 'ring-2 ring-primary bg-primary/5' : ''
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <CardContent className="p-4 md:p-6 text-center">
                <Icon name={category.icon as any} size={32} className="mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-sm md:text-base mb-1">{category.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{category.count} товаров</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Weekly Deals Banner */}
        <Card className="mb-8 md:mb-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Zap" size={20} className="text-primary" />
                  <Badge className="bg-primary text-primary-foreground">Акция недели</Badge>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Скидки до 70%</h2>
                <p className="text-muted-foreground">Ограниченные предложения на популярные товары</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
                {weeklyDeals.map((deal, index) => (
                  <div key={index} className="text-center bg-white/50 dark:bg-black/20 rounded-lg p-3">
                    <p className="font-medium text-sm">{deal.title}</p>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <span className="text-xs line-through text-muted-foreground">{deal.originalPrice}</span>
                      <span className="text-sm font-bold text-primary">{deal.price}</span>
                    </div>
                    <Badge variant="destructive" className="text-xs mt-1">-{deal.discount}%</Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Products */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Рекомендуемые товары</h2>
            <Button variant="outline" className="rounded-xl">
              <Icon name="ArrowRight" size={16} className="ml-2" />
              Смотреть все
            </Button>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-4 rounded-xl p-1 bg-muted/50 mb-6">
              <TabsTrigger value="all" className="rounded-lg text-xs sm:text-sm">Все</TabsTrigger>
              <TabsTrigger value="games" className="rounded-lg text-xs sm:text-sm">Игры</TabsTrigger>
              <TabsTrigger value="assets" className="rounded-lg text-xs sm:text-sm">Ассеты</TabsTrigger>
              <TabsTrigger value="tools" className="rounded-lg text-xs sm:text-sm">Инструменты</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {featuredItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        {item.discount && (
                          <Badge variant="destructive" className="text-xs">
                            -{item.discount}%
                          </Badge>
                        )}
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="text-xs capitalize">
                          {item.type === 'game' ? 'Игра' : item.type === 'assets' ? 'Ассеты' : 'Инструмент'}
                        </Badge>
                      </div>
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                      >
                        <Icon name="Heart" size={16} />
                      </Button>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-lg truncate">{item.title}</CardTitle>
                          <CardDescription className="text-sm mt-1 truncate">
                            от {item.developer}
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-1 ml-2">
                          <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1 mb-4">
                        {item.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs rounded-full">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          {item.originalPrice && (
                            <span className="text-sm line-through text-muted-foreground">
                              {item.originalPrice}
                            </span>
                          )}
                          <span className="text-lg font-bold text-primary">{item.price}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1 rounded-xl">
                          <Icon name="ShoppingCart" size={14} className="mr-2" />
                          В корзину
                        </Button>
                        <Button variant="outline" className="rounded-xl">
                          <Icon name="Eye" size={14} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="games">
              <div className="text-center py-12">
                <Icon name="Gamepad2" size={64} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Игры в разработке</h3>
                <p className="text-muted-foreground">Скоро здесь появятся лучшие игры!</p>
              </div>
            </TabsContent>

            <TabsContent value="assets">
              <div className="text-center py-12">
                <Icon name="Package" size={64} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ассеты в разработке</h3>
                <p className="text-muted-foreground">Скоро здесь появятся качественные ассеты!</p>
              </div>
            </TabsContent>

            <TabsContent value="tools">
              <div className="text-center py-12">
                <Icon name="Settings" size={64} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Инструменты в разработке</h3>
                <p className="text-muted-foreground">Скоро здесь появятся полезные инструменты!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Special Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-6">
              <Icon name="Gift" size={40} className="text-primary mb-3" />
              <h3 className="text-xl font-bold mb-2">Стать разработчиком</h3>
              <p className="text-muted-foreground mb-4">
                Загружайте свои игры и ассеты, получайте до 70% от продаж
              </p>
              <Button className="rounded-xl">
                <Icon name="Upload" size={16} className="mr-2" />
                Начать продавать
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20">
            <CardContent className="p-6">
              <Icon name="Crown" size={40} className="text-accent mb-3" />
              <h3 className="text-xl font-bold mb-2">Premium подписка</h3>
              <p className="text-muted-foreground mb-4">
                Скидки 20%, ранний доступ и эксклюзивный контент
              </p>
              <Button variant="outline" className="rounded-xl border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Подробнее
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Store;