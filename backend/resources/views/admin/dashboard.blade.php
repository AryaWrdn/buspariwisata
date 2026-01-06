<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Pesanan Tiket</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>

<body class="bg-light">
    <nav class="navbar navbar-dark bg-dark mb-4 shadow-sm">
        <div class="container">
            <span class="navbar-brand mb-0 h1">
                <i class="fas fa-bus me-2"></i> Admin Bus Pariwisata
            </span>
            <a href="/" class="btn btn-outline-light btn-sm">Lihat Website</a>
        </div>
    </nav>

    <div class="container">
        <div class="card shadow border-0">
            <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h4 class="mb-0">Daftar Pemesanan Tiket</h4>
                <span class="badge bg-light text-primary">{{ $orders->count() }} Total Pesanan</span>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-striped table-hover align-middle">
                        <thead class="table-dark">
                            <tr>
                                <th>No</th>
                                <th>Nama Pemesan</th>
                                <th>Email</th>
                                <th>Telepon</th>
                                <th>Tanggal</th>
                                <th>Jumlah</th>
                                <th>Pesan Tambahan</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($orders as $key => $order)
                                <tr>
                                    <td>{{ $key + 1 }}</td>
                                    <td class="fw-bold">{{ $order->nama }}</td>
                                    <td>{{ $order->email }}</td>
                                    <td>{{ $order->telepon }}</td>
                                    <td>{{ \Carbon\Carbon::parse($order->tanggal)->format('d M Y') }}</td>
                                    <td><span class="badge bg-info text-dark">{{ $order->jumlah }} Orang</span></td>
                                    <td>
                                        <small class="text-muted italic">{{ $order->pesan ?? '-' }}</small>
                                    </td>
                                    <td>
                                        <span class="badge bg-success">
                                            <i class="fas fa-check-circle me-1"></i> Berhasil
                                        </span>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="8" class="text-center py-4 text-muted">
                                        <i class="fas fa-inbox fa-3x mb-3 d-block"></i>
                                        Belum ada pesanan masuk di database.
                                    </td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
