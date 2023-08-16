<!-- Sidebar -->
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<!-- Sidebar - Brand -->
<a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
    <img class="img-profile"
        src="/asset/img/logo/logo.png">
    <div class="sidebar-brand-text mx-2">SIBIA</sup></div>
</a>

<div class="sidebar-heading">
        Users Profile
    </div>

    <li class="nav-item">
        <a class="nav-link collapsed" href="<?= base_url('user'); ?>">
            <i class="fas fa-users"></i>
            <span>My Profile</span>
        </a>
    </li>

<?php if (in_groups('admin')) : ?>
    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
        Users Management
    </div>

    <!-- Nav Item - Users List -->
    <li class="nav-item">
        <a class="nav-link collapsed" href="<?= base_url('admin'); ?>">
            <i class="fas fa-users"></i>
            <span>Users List</span>
        </a>
    </li>
    
<?php endif; ?>
    <!-- Nav Item - Users List -->

<!-- Divider -->
<hr class="sidebar-divider">

<!-- Heading -->
<div class="sidebar-heading">
    Input Session
</div>

<!-- Nav Item - Pages Form Bisnis Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="<?= base_url('bisnis'); ?>">
        <i class="fas fa-fw fa-table"></i>
        <span>Form Bisnis</span>
    </a>
</li>

<!-- Nav Item - Utilities Data Inventaris Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="<?= base_url('inv'); ?>">
        <i class="fas fa-fw fa-wrench"></i>
        <span>Data Inventaris</span>
    </a>
</li>

<!-- Nav Item - Utilities BIA Menu -->
<li class="nav-item">
    <a class="nav-link" href="<?= base_url('bia'); ?>">
        <i class="fas fa-fw fa-cog"></i>
        <span>BIA</span>
    </a>
</li>

<li class="nav-item">
    <a class="nav-link" href="<?= base_url('bia2'); ?>">
        <i class="fas fa-fw fa-cog"></i>
        <span>BIA LANJUTAN</span>
    </a>
</li>

<!-- Sidebar Toggler (Sidebar) -->
<div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
</div>

</ul>
<!-- End of Sidebar -->