<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Pesanan Tiket</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <style>
        .ticket-badge {
            font-size: 0.8rem;
            padding: 5px 8px;
            min-width: 60px;
            text-align: center;
        }
        .table-responsive {
            overflow-x: auto;
        }
        /* Biar kolom nama & email gak terlalu sempit */
        .col-nama { min-width: 150px; }
        .col-email { min-width: 180px; }
        .col-aksi { min-width: 140px; }
        .col-tiket { min-width: 250px; }
    </style>
</head>

<body class="bg-light">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-4">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">
                <i class="fas fa-bus-alt me-2 text-warning"></i> Admin Bus Pariwisata
            </a>
            <div class="ms-auto">
                <a href="/" class="btn btn-outline-warning btn-sm">
                    <i class="fas fa-globe me-1"></i> Lihat Website
                </a>
            </div>
        </div>
    </nav>

    <div class="container pb-5">
        <div class="card shadow-sm border-0 rounded-3">
            <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                <h5 class="mb-0 fw-bold text-primary">
                    <i class="fas fa-list-alt me-2"></i> Daftar Pesanan Tiket
                </h5>
                <span class="badge bg-primary rounded-pill px-3 py-2">
                    Total: {{ $orders->count() }} Pesanan
                </span>
            </div>

            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0 table-striped">
                        <thead class="table-primary text-nowrap">
                            <tr>
                                <th class="py-3 ps-3">No</th>
                                <th class="py-3 col-nama">Pemesan</th>
                                <th class="py-3 col-email">Kontak</th>
                                <th class="py-3">Jadwal</th>
                                <th class="py-3 text-center">Jml</th>
                                <th class="py-3 col-aksi text-center">Status & Aksi</th>
                                <th class="py-3 col-tiket">Tiket Terbit</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($orders as $key => $order)
                                <tr>
                                    <td class="ps-3 fw-bold text-muted">{{ $key + 1 }}</td>

                                    <td>
                                        <div class="fw-bold text-dark">{{ $order->nama }}</div>
                                        <small class="text-muted d-block" style="font-size: 0.8rem;">
                                            ID Order: #{{ $order->id }}
                                        </small>
                                        @if($order->pesan)
                                            <small class="text-info fst-italic" style="font-size: 0.75rem;">
                                                <i class="fas fa-comment-alt me-1"></i> "{{ Str::limit($order->pesan, 20) }}"
                                            </small>
                                        @endif
                                    </td>

                                    <td>
                                        <div class="d-flex flex-column gap-1">
                                            <small><i class="fas fa-envelope me-2 text-secondary"></i>{{ $order->email }}</small>
                                            <small><i class="fas fa-phone me-2 text-secondary"></i>{{ $order->telepon }}</small>
                                        </div>
                                    </td>

                                    <td>
                                        <span class="badge bg-light text-dark border">
                                            <i class="far fa-calendar-alt me-1"></i>
                                            {{ \Carbon\Carbon::parse($order->tanggal)->format('d M Y') }}
                                        </span>
                                    </td>

                                    <td class="text-center">
                                        <span class="fw-bold fs-5">{{ $order->jumlah }}</span>
                                        <small class="d-block text-muted" style="font-size: 0.7rem;">Pax</small>
                                    </td>

                                    <td class="text-center">
                                        @if($order->status == 'Pending')
                                            <span class="badge bg-warning text-dark mb-2 w-100">Pending</span>
                                            <form action="{{ route('admin.confirm', $order->id) }}" method="POST">
                                                @csrf
                                                <button type="submit" class="btn btn-sm btn-success w-100 shadow-sm"
                                                    onclick="return confirm('Yakin konfirmasi pesanan ini? Tiket akan dibuat otomatis.')">
                                                    <i class="fas fa-check-circle me-1"></i> Proses
                                                </button>
                                            </form>
                                        @else
                                            <span class="badge bg-success w-100 py-2">
                                                <i class="fas fa-check-double me-1"></i> Confirmed
                                            </span>
                                        @endif
                                    </td>

                                    <td>
                                        @if($order->status == 'Confirmed')
                                            <div class="d-flex flex-wrap gap-2">
                                                @foreach($order->tickets as $ticket)
                                                    <span class="badge bg-white text-primary border border-primary ticket-badge shadow-sm">
                                                        <i class="fas fa-ticket-alt me-1"></i> {{ $ticket->nomor_tiket }}
                                                    </span>
                                                @endforeach
                                            </div>
                                        @else
                                            <div class="text-center py-2 bg-light rounded text-muted" style="font-size: 0.85rem;">
                                                <i class="fas fa-clock me-1"></i> Menunggu Konfirmasi
                                            </div>
                                        @endif
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="7" class="text-center py-5">
                                        <div class="text-muted">
                                            <i class="fas fa-inbox fa-4x mb-3 text-light-emphasis"></i>
                                            <p class="mb-0 fs-5">Belum ada pesanan masuk.</p>
                                            <small>Pesanan baru akan muncul di sini secara otomatis.</small>
                                        </div>
                                    </td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="card-footer bg-white py-3 text-end">
                <small class="text-muted">Admin Dashboard v1.0 &copy; {{ date('Y') }}</small>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
