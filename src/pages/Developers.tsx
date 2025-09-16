import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/layout/Header';
import Icon from '@/components/ui/icon';

const Developers = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const statsCards = [
    { title: 'Общий доход', value: '₽124,567', change: '+12%', icon: 'TrendingUp', color: 'text-green-500' },
    { title: 'Активные проекты', value: '8', change: '+2', icon: 'Folder', color: 'text-blue-500' },
    { title: 'Загрузки', value: '15,234', change: '+1,234', icon: 'Download', color: 'text-purple-500' },
    { title: 'Рейтинг', value: '4.8', change: '+0.2', icon: 'Star', color: 'text-yellow-500' }
  ];

  const recentProjects = [
    {
      id: 1,
      name: 'Space Explorer',
      type: 'Игра',
      status: 'Опубликовано',
      downloads: 1234,
      revenue: '₽45,600',
      rating: 4.8
    },
    {
      id: 2,
      name: 'UI Kit Pro',
      type: 'Ассеты',
      status: 'На модерации',
      downloads: 0,
      revenue: '₽0',
      rating: 0
    },
    {
      id: 3,
      name: 'Sound Pack',
      type: 'Аудио',
      status: 'Опубликовано',
      downloads: 567,
      revenue: '₽12,300',
      rating: 4.6
    }
  ];

  const uploadSteps = [
    { title: 'Подготовьте файлы', description: 'Соберите все необходимые файлы проекта', icon: 'FileText', completed: true },
    { title: 'Заполните описание', description: 'Добавьте название, описание и теги', icon: 'Edit', completed: true },
    { title: 'Добавьте изображения', description: 'Загрузите скриншоты и обложку', icon: 'Image', completed: false },
    { title: 'Настройте цены', description: 'Установите цену или сделайте бесплатным', icon: 'DollarSign', completed: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 dark:from-background dark:to-muted/10">
      <Header currentPage="developers" />
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Панель разработчика</h1>
              <p className="text-lg text-muted-foreground">
                Управляйте своими проектами и отслеживайте статистику
              </p>
            </div>
            <Button className="rounded-xl">
              <Icon name="Plus" size={16} className="mr-2" />
              Загрузить проект
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <Icon name={stat.icon as any} size={20} className={stat.color} />
                  <Badge variant="secondary" className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl grid-cols-4 rounded-xl p-1 bg-muted/50 mb-8">
            <TabsTrigger value="overview" className="rounded-lg text-xs sm:text-sm">Обзор</TabsTrigger>
            <TabsTrigger value="projects" className="rounded-lg text-xs sm:text-sm">Проекты</TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-lg text-xs sm:text-sm">Аналитика</TabsTrigger>
            <TabsTrigger value="upload" className="rounded-lg text-xs sm:text-sm">Загрузка</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Недавняя активность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { action: 'Новая загрузка', item: 'Space Explorer v1.2', time: '2 часа назад', type: 'upload' },
                        { action: 'Получен отзыв', item: 'UI Kit Pro (5 ⭐)', time: '4 часа назад', type: 'review' },
                        { action: 'Покупка', item: 'Sound Pack', time: '1 день назад', type: 'sale' }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <Icon 
                              name={activity.type === 'upload' ? 'Upload' : activity.type === 'review' ? 'Star' : 'ShoppingCart'} 
                              size={14} 
                              className="text-primary" 
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.action}</p>
                            <p className="text-xs text-muted-foreground">{activity.item}</p>
                          </div>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Быстрые действия</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start rounded-xl" variant="outline">
                      <Icon name="Upload" size={16} className="mr-2" />
                      Загрузить новый проект
                    </Button>
                    <Button className="w-full justify-start rounded-xl" variant="outline">
                      <Icon name="BarChart" size={16} className="mr-2" />
                      Посмотреть аналитику
                    </Button>
                    <Button className="w-full justify-start rounded-xl" variant="outline">
                      <Icon name="MessageSquare" size={16} className="mr-2" />
                      Ответить на отзывы
                    </Button>
                    <Button className="w-full justify-start rounded-xl" variant="outline">
                      <Icon name="Settings" size={16} className="mr-2" />
                      Настройки профиля
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Мои проекты</CardTitle>
                  <Button className="rounded-xl">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Новый проект
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow">
                      <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Icon name="Folder" size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{project.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Badge variant="outline" className="text-xs">{project.type}</Badge>
                            <Badge 
                              className={`text-xs ${
                                project.status === 'Опубликовано' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                              }`}
                            >
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <p className="font-semibold">{project.downloads}</p>
                          <p className="text-muted-foreground">загрузок</p>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold">{project.revenue}</p>
                          <p className="text-muted-foreground">доход</p>
                        </div>
                        {project.rating > 0 && (
                          <div className="flex items-center space-x-1">
                            <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{project.rating}</span>
                          </div>
                        )}
                        <Button size="sm" variant="outline" className="rounded-lg">
                          <Icon name="Edit" size={14} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Доходы по месяцам</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <Icon name="BarChart" size={48} className="mx-auto mb-4 opacity-50" />
                      <p>График доходов</p>
                      <p className="text-sm">Интеграция с аналитикой в разработке</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Популярные проекты</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentProjects.filter(p => p.downloads > 0).map((project, index) => (
                      <div key={project.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                            <span className="text-sm font-bold text-primary">{index + 1}</span>
                          </div>
                          <div>
                            <p className="font-medium">{project.name}</p>
                            <p className="text-sm text-muted-foreground">{project.downloads} загрузок</p>
                          </div>
                        </div>
                        <Progress value={project.downloads / 12.34} className="w-20" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="upload">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Загрузить новый проект</CardTitle>
                    <CardDescription>
                      Следуйте этим шагам для успешной публикации вашего проекта
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {uploadSteps.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted text-muted-foreground border-2 border-muted-foreground'
                          }`}>
                            {step.completed ? (
                              <Icon name="Check" size={16} />
                            ) : (
                              <Icon name={step.icon as any} size={16} />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-semibold ${step.completed ? 'text-primary' : 'text-foreground'}`}>
                              {step.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t">
                      <Button className="rounded-xl">
                        <Icon name="Upload" size={16} className="mr-2" />
                        Начать загрузку
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Советы для разработчиков</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon name="Lightbulb" size={16} className="text-primary mb-2" />
                      <h4 className="font-semibold text-sm mb-1">Качественные скриншоты</h4>
                      <p className="text-xs text-muted-foreground">
                        Добавляйте яркие и информативные изображения для привлечения пользователей
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                      <Icon name="Target" size={16} className="text-secondary mb-2" />
                      <h4 className="font-semibold text-sm mb-1">Подробное описание</h4>
                      <p className="text-xs text-muted-foreground">
                        Опишите особенности и преимущества вашего проекта
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <Icon name="Users" size={16} className="text-accent mb-2" />
                      <h4 className="font-semibold text-sm mb-1">Активное сообщество</h4>
                      <p className="text-xs text-muted-foreground">
                        Отвечайте на вопросы и собирайте отзывы пользователей
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Developers;