import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, Edit } from "lucide-react";

interface Order {
  id: string;
  customerName: string;
  phone: string;
  governorate: string;
  address: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | "on-hold" | "refunded";
  amount: number;
  createdAt: string;
}

const OrdersTable = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD-001",
      customerName: "Ahmed Ben Ali",
      phone: "+216 98 123 456",
      governorate: "Tunis",
      address: "Avenue Habib Bourguiba, Tunis",
      status: "processing",
      amount: 99000,
      createdAt: "2024-01-15T10:30:00Z"
    },
    {
      id: "ORD-002", 
      customerName: "Fatma Chaouachi",
      phone: "+216 97 234 567",
      governorate: "Sfax",
      address: "Rue de la République, Sfax",
      status: "shipped",
      amount: 99000,
      createdAt: "2024-01-14T14:22:00Z"
    },
    {
      id: "ORD-003",
      customerName: "Mohamed Trabelsi",
      phone: "+216 99 345 678", 
      governorate: "Sousse",
      address: "Avenue Léopold Sédar Senghor, Sousse",
      status: "pending",
      amount: 99000,
      createdAt: "2024-01-14T09:15:00Z"
    },
    {
      id: "ORD-004",
      customerName: "Leila Mansouri",
      phone: "+216 96 456 789",
      governorate: "Bizerte", 
      address: "Rue Farhat Hached, Bizerte",
      status: "delivered",
      amount: 99000,
      createdAt: "2024-01-13T16:45:00Z"
    },
    {
      id: "ORD-005",
      customerName: "Karim Jebali",
      phone: "+216 95 567 890",
      governorate: "Monastir",
      address: "Avenue de l'Indépendance, Monastir", 
      status: "cancelled",
      amount: 99000,
      createdAt: "2024-01-13T11:20:00Z"
    }
  ]);

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    processing: "bg-blue-100 text-blue-800 border-blue-200", 
    shipped: "bg-purple-100 text-purple-800 border-purple-200",
    delivered: "bg-green-100 text-green-800 border-green-200",
    cancelled: "bg-red-100 text-red-800 border-red-200",
    "on-hold": "bg-orange-100 text-orange-800 border-orange-200",
    refunded: "bg-gray-100 text-gray-800 border-gray-200"
  };

  const statusLabels = {
    pending: "En attente",
    processing: "En cours",
    shipped: "Expédié", 
    delivered: "Livré",
    cancelled: "Annulé",
    "on-hold": "En suspens",
    refunded: "Remboursé"
  };

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders(prev => 
      prev.map(order => 
        order.id === orderId 
          ? { ...order, status: newStatus }
          : order
      )
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fr-TN', {
      style: 'decimal',
      minimumFractionDigits: 3,
      maximumFractionDigits: 3
    }).format(amount / 1000) + ' TND';
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestion des Commandes</h2>
        <div className="text-sm text-muted-foreground">
          Total: {orders.length} commande(s)
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Commande</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Téléphone</TableHead>
              <TableHead>Gouvernorat</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Montant</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.phone}</TableCell>
                <TableCell>{order.governorate}</TableCell>
                <TableCell>
                  <Select
                    value={order.status}
                    onValueChange={(value: Order["status"]) => 
                      updateOrderStatus(order.id, value)
                    }
                  >
                    <SelectTrigger className="w-32">
                      <Badge className={statusColors[order.status]}>
                        {statusLabels[order.status]}
                      </Badge>
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(statusLabels).map(([status, label]) => (
                        <SelectItem key={status} value={status}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="font-semibold">
                  {formatPrice(order.amount)}
                </TableCell>
                <TableCell>{formatDate(order.createdAt)}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default OrdersTable;