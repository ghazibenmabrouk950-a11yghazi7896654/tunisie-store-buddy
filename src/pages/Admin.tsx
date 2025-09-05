import AdminLayout from "@/components/AdminLayout";
import OrdersTable from "@/components/OrdersTable";
import { Card } from "@/components/ui/card";
import { Package, TrendingUp, Users, DollarSign } from "lucide-react";

const Admin = () => {
  const stats = [
    {
      icon: Package,
      title: "Total Commandes",
      value: "127",
      change: "+12% ce mois",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Revenus",
      value: "1,254,000 TND",
      change: "+18% ce mois", 
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Nouveaux Clients",
      value: "89",
      change: "+25% ce mois",
      color: "text-purple-600"
    },
    {
      icon: DollarSign,
      title: "Panier Moyen",
      value: "99,000 TND",
      change: "Stable",
      color: "text-orange-600"
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Orders Table */}
        <OrdersTable />
      </div>
    </AdminLayout>
  );
};

export default Admin;