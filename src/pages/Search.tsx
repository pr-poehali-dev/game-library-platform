import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [priceFilter, setPriceFilter] = useState('all');

  const searchResults = [
    {
      id: 1,
      title: "Space Explorer",
      developer: "Cosmic Studios",
      image: "/img/7d763086-73b4-44ef-9030-87634134c49c.jpg",
      tags: ["Космос", "Приключения", "3D"],
      price: "Бесплатно",
      rating: 4.6,
      type: "game"
    },
    {
      id: 2,
      title: "UI Kit Pro",
      developer: "Design Masters",
      image: "/img/f571c278-7833-4bbe-9c6d-bc3f55452e78.jpg",
      tags: ["UI", "Ассеты", "Дизайн"],
      price: "1299₽",
      rating: 4.9,
      type: "assets"
    },
    {
      id: 3,
      title: "Pixel Platformer",
      developer: "Retro Games",
      image: "/img/8d3c80fc-aa1f-4103-ad16-bb354511a936.jpg",
      tags: ["Платформер", "Пиксель", "Ретро"],
      price: "599₽",
      rating: 4.4,
      type: "game"
    }
  ];

  const filters = [
    { id: "free", label: "Бесплатные", count: 156 },
    { id: "paid", label: "Платные", count: 234 },
    { id: "new", label: "Новинки", count: 45 },
    { id: "popular", label: "Популярные", count: 89 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 dark:from-background dark:to-muted/10">
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Search Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Поиск по каталогу</h1>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Icon name="Search" size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Найти игры, ассеты, инструменты..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 h-12 text-base rounded-xl border-2 focus:border-primary"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg px-4">
              Найти
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Фильтры</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price Filter */}
                <div>
                  <h3 className="font-medium mb-3">Цена</h3>
                  <Select value={priceFilter} onValueChange={setPriceFilter}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите цену" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Любая цена</SelectItem>
                      <SelectItem value="free">Бесплатно</SelectItem>
                      <SelectItem value="under500">До 500₽</SelectItem>
                      <SelectItem value="under1000">До 1000₽</SelectItem>
                      <SelectItem value="over1000">Свыше 1000₽</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Category Filters */}
                <div>
                  <h3 className="font-medium mb-3">Категории</h3>
                  <div className="space-y-3">
                    {filters.map((filter) => (
                      <div key={filter.id} className="flex items-center space-x-2">
                        <Checkbox id={filter.id} />
                        <label 
                          htmlFor={filter.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {filter.label}
                        </label>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {filter.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h3 className="font-medium mb-3">Рейтинг</h3>
                  <div className="space-y-2">
                    {[5, 4, 3].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <label htmlFor={`rating-${rating}`} className="flex items-center space-x-1 cursor-pointer">
                          {Array.from({ length: rating }).map((_, i) => (
                            <Icon key={i} name="Star" size={12} className="fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="text-sm">и выше</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search Results */}
          <div className="lg:col-span-3">
            {/* Sort and View Options */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <p className="text-muted-foreground">Найдено {searchResults.length} результатов</p>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground">Сортировать:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">По релевантности</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                    <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                    <SelectItem value="newest">Сначала новые</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-sm grid-cols-4 rounded-xl p-1 bg-muted/50">
                <TabsTrigger value="all" className="rounded-lg text-xs sm:text-sm">Все</TabsTrigger>
                <TabsTrigger value="games" className="rounded-lg text-xs sm:text-sm">Игры</TabsTrigger>
                <TabsTrigger value="assets" className="rounded-lg text-xs sm:text-sm">Ассеты</TabsTrigger>
                <TabsTrigger value="tools" className="rounded-lg text-xs sm:text-sm">Инструменты</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                  {searchResults.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge variant="secondary" className="bg-white/90 dark:bg-black/90 text-xs backdrop-blur-sm">
                            {item.price}
                          </Badge>
                        </div>
                        <div className="absolute top-3 left-3">
                          <Badge className="text-xs capitalize">
                            {item.type === 'game' ? 'Игра' : item.type === 'assets' ? 'Ассеты' : 'Инструмент'}
                          </Badge>
                        </div>
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
                        <div className="flex space-x-2">
                          <Button className="flex-1 rounded-xl" size="sm">
                            <Icon name={item.type === 'game' ? 'Play' : 'Download'} size={14} className="mr-2" />
                            {item.type === 'game' ? 'Играть' : 'Скачать'}
                          </Button>
                          <Button variant="outline" size="sm" className="rounded-xl">
                            <Icon name="Heart" size={14} />
                          </Button>
                          <Button variant="outline" size="sm" className="rounded-xl">
                            <Icon name="Share2" size={14} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="games" className="mt-6">
                <div className="text-center py-12">
                  <Icon name="Gamepad2" size={64} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Игры не найдены</h3>
                  <p className="text-muted-foreground">Попробуйте изменить фильтры поиска</p>
                </div>
              </TabsContent>

              <TabsContent value="assets" className="mt-6">
                <div className="text-center py-12">
                  <Icon name="Package" size={64} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ассеты не найдены</h3>
                  <p className="text-muted-foreground">Попробуйте изменить фильтры поиска</p>
                </div>
              </TabsContent>

              <TabsContent value="tools" className="mt-6">
                <div className="text-center py-12">
                  <Icon name="Settings" size={64} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Инструменты не найдены</h3>
                  <p className="text-muted-foreground">Попробуйте изменить фильтры поиска</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;