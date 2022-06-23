"""empty message

Revision ID: fc199fd16e31
Revises: 20f4e73166e2
Create Date: 2022-06-20 11:42:04.103635

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fc199fd16e31'
down_revision = '20f4e73166e2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('is_teacher', sa.Boolean(), nullable=True))
    op.drop_column('user', 'student_or_teacher')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('student_or_teacher', sa.BOOLEAN(), autoincrement=False, nullable=True))
    op.drop_column('user', 'is_teacher')
    # ### end Alembic commands ###
