<div class="header">
	<div class="header-block header-navigation">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/">Todo</a>
	</div>
	<div class="header-block header-actions">
		<a href="/auth">Sign In</a>
	</div>
</div>

<style lang="scss">
	.header {
		width: 100%;
		height: 60px;
		display: flex;
		background-color: rgb(101, 101, 255);
		padding: 5px 20px;
		justify-content: space-between;

        .header-block {
            display: flex;
            gap: 20px;
            align-items: center;
            flex: 1;
        }

		.header-navigation {
			justify-content: flex-start;
			
		}

		.header-actions {
			justify-content: flex-end;
		}

		a {
			color: white;
			text-decoration: none;

			&:hover {
				color: rgb(201, 201, 69);
			}
		}
	}
</style>
